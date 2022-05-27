<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { GeoJSONFeature } from 'maplibre-gl';
	import { config } from '../config';
	import { map } from '../stores';

	let selectedProvId: string;
	let selectedDistId: string;
	let selectedSectId: string;
	let selectedCellId: string;
	let selectedVillId: string;

	let provinces: GeoJSONFeature[] = [];
	let districts: GeoJSONFeature[] = [];
	let sectors: GeoJSONFeature[] = [];
	let cells: GeoJSONFeature[] = [];
	let villages: GeoJSONFeature[] = [];

	$: selectedProvId, onAdminChanged('province');
	$: selectedDistId, onAdminChanged('district');
	$: selectedSectId, onAdminChanged('sector');
	$: selectedCellId, onAdminChanged('cell');
	$: selectedVillId, onAdminChanged('village');

	const onAdminChanged = async (
		adminType?: 'province' | 'district' | 'sector' | 'cell' | 'village'
	) => {
		let geojson: GeoJSONFeature;
		let url: string;
		switch (adminType) {
			case 'province':
				if (selectedProvId) {
					geojson = provinces.filter((admin) => admin.properties.id === Number(selectedProvId))[0];
				}
				break;
			case 'district':
				if (selectedDistId) {
					geojson = districts.filter((admin) => admin.properties.id === Number(selectedDistId))[0];
				}
				break;
			case 'sector':
				if (selectedSectId) {
					geojson = sectors.filter((admin) => admin.properties.id === Number(selectedSectId))[0];
				}
				break;
			case 'cell':
				if (selectedCellId) {
					geojson = cells.filter((admin) => admin.properties.id === Number(selectedCellId))[0];
				}
				break;
			case 'village':
				if (selectedVillId) {
					geojson = villages.filter((admin) => admin.properties.id === Number(selectedVillId))[0];
				}
				break;
		}

		zoomToBoundary(geojson);

		if (adminType === 'village') return;

		if (
			adminType === 'cell' &&
			selectedProvId &&
			selectedDistId &&
			selectedSectId &&
			selectedCellId
		) {
			const url = `${config.adminBoundary.url}/${selectedProvId}/${selectedDistId}/${selectedSectId}/${selectedCellId}/village.geojson`;
			villages = await getFeatures(url);
			selectedVillId = '';
		} else if (adminType === 'sector' && selectedProvId && selectedDistId && selectedSectId) {
			const url = `${config.adminBoundary.url}/${selectedProvId}/${selectedDistId}/${selectedSectId}/cell.geojson`;
			cells = await getFeatures(url);
			villages = [];
			selectedCellId = '';
			selectedVillId = '';
		} else if (adminType === 'district' && selectedProvId && selectedDistId) {
			const url = `${config.adminBoundary.url}/${selectedProvId}/${selectedDistId}/sector.geojson`;
			sectors = await getFeatures(url);
			cells = [];
			villages = [];
			selectedSectId = '';
			selectedCellId = '';
			selectedVillId = '';
		} else if (adminType === 'province' && selectedProvId) {
			const url = `${config.adminBoundary.url}/${selectedProvId}/district.geojson`;
			districts = await getFeatures(url);
			sectors = [];
			cells = [];
			villages = [];
			selectedDistId = '';
			selectedSectId = '';
			selectedCellId = '';
			selectedVillId = '';
		} else {
			if (provinces.length === 0) {
				const url = `${config.adminBoundary.url}/province.geojson`;
				provinces = await getFeatures(url);
				districts = [];
				sectors = [];
				cells = [];
				villages = [];
				selectedProvId = '';
				selectedDistId = '';
				selectedSectId = '';
				selectedCellId = '';
				selectedVillId = '';
			}
		}
	};

	const getFeatures = async (url: string) => {
		const json = await (await fetch(url)).json();
		return json.features;
	};

	const zoomToBoundary = (geojson) => {
		if (!geojson) return;
		const layerId = 'selected-boundary';
		if ('bbox' in geojson) {
			$map.fitBounds(geojson.bbox);
		}

		const data = {
			type: 'FeatureCollection',
			features: [geojson]
		};

		if (!$map.getLayer(layerId)) {
			$map.addSource(layerId, { type: 'geojson', data });
			$map.addLayer({
				id: layerId,
				type: 'fill',
				source: layerId,
				paint: {
					'fill-color': 'rgba(255, 0, 0, 1)',
					'fill-outline-color': 'rgba(255, 0, 0, 1)',
					'fill-opacity': 0.1
				},
				filter: ['==', '$type', 'Polygon']
			});
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			$map.getSource(layerId).setData(data);
		}
	};
</script>

<Select
	variant="outlined"
	bind:value={selectedProvId}
	style="width:100%;padding-left: 0em;padding-bottom: 0.5em;"
>
	<Option value="">Select province...</Option>
	{#each provinces as feature}
		<Option value={feature.properties.id}>{feature.properties.name}</Option>
	{/each}
</Select>
{#if selectedProvId}
	<Select
		variant="outlined"
		bind:value={selectedDistId}
		style="width:100%;padding-left: 0em;padding-bottom: 0.5em;"
	>
		<Option value="">Select district...</Option>
		{#each districts as feature}
			<Option value={feature.properties.id}>{feature.properties.name}</Option>
		{/each}
	</Select>
{/if}
{#if selectedProvId && selectedDistId}
	<Select
		variant="outlined"
		bind:value={selectedSectId}
		style="width:100%;padding-left: 0em;padding-bottom: 0.5em;"
	>
		<Option value="">Select sector...</Option>
		{#each sectors as feature}
			<Option value={feature.properties.id}>{feature.properties.name}</Option>
		{/each}
	</Select>
{/if}
{#if selectedProvId && selectedDistId && selectedSectId}
	<Select
		variant="outlined"
		bind:value={selectedCellId}
		style="width:100%;padding-left: 0em;padding-bottom: 0.5em;"
	>
		<Option value="">Select cell...</Option>
		{#each cells as feature}
			<Option value={feature.properties.id}>{feature.properties.name}</Option>
		{/each}
	</Select>
{/if}
{#if selectedProvId && selectedDistId && selectedSectId && selectedCellId}
	<Select
		variant="outlined"
		bind:value={selectedVillId}
		style="width:100%;padding-left: 0em;padding-bottom: 0.5em;"
	>
		<Option value="">Select village...</Option>
		{#each villages as feature}
			<Option value={feature.properties.id}>{feature.properties.name}</Option>
		{/each}
	</Select>
{/if}

<!-- {#if config.adminBoundary}
	<div class="select">
		<Select variant="outlined" bind:value label="Area" style="width:100%">
			<Icon class="material-icons" slot="leadingIcon">zoom_in_map</Icon>
			<Option value="" />
			{#each areas as areas}
				<Option value={JSON.stringify(areas)}>{areas.title}</Option>
			{/each}
			<svelte:fragment slot="helperText">Select the area zooming to.</svelte:fragment>
		</Select>
	</div>
{/if} -->
<style lang="scss">
	.select {
		padding-left: 0em;
		padding-bottom: 0.5em;
	}
</style>
