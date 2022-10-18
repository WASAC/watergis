<script lang="ts">
	import type { GeoJSONFeature } from 'maplibre-gl';
	import { config } from '../../config';
	import { map } from '$lib/stores';

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

<div class="columns">
	<div class="column is-full p-2">
		<div class="select is-fullwidth">
			<select bind:value={selectedProvId}>
				<option value="">Select province...</option>
				{#each provinces as feature}
					<option value={feature.properties.id}>{feature.properties.name}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

{#if selectedProvId}
	<div class="columns">
		<div class="column is-full p-2">
			<div class="select is-fullwidth">
				<select bind:value={selectedDistId}>
					<option value="">Select district...</option>
					{#each districts as feature}
						<option value={feature.properties.id}>{feature.properties.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
{/if}
{#if selectedProvId && selectedDistId}
	<div class="columns">
		<div class="column is-full p-2">
			<div class="select is-fullwidth">
				<select bind:value={selectedSectId}>
					<option value="">Select sector...</option>
					{#each sectors as feature}
						<option value={feature.properties.id}>{feature.properties.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
{/if}
{#if selectedProvId && selectedDistId && selectedSectId}
	<div class="columns">
		<div class="column is-full p-2">
			<div class="select is-fullwidth">
				<select bind:value={selectedCellId}>
					<option value="">Select cell...</option>
					{#each cells as feature}
						<option value={feature.properties.id}>{feature.properties.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
{/if}
{#if selectedProvId && selectedDistId && selectedSectId && selectedCellId}
	<div class="columns">
		<div class="column is-full p-2">
			<div class="select is-fullwidth">
				<select bind:value={selectedVillId}>
					<option value="">Select village...</option>
					{#each villages as feature}
						<option value={feature.properties.id}>{feature.properties.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
{/if}
