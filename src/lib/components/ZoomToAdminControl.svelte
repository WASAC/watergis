<script lang="ts">
	import type { GeoJSONFeature } from 'maplibre-gl';
	import { config } from '../../config';
	import { map } from '$lib/stores';

	const layerId = 'selected-boundary';

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
				} else {
					clearBoundary();
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

	const clearBoundary = () => {
		if ($map?.getLayer(layerId)) {
			$map.removeLayer(layerId);
		}
		if ($map?.getSource(layerId)) {
			$map.removeSource(layerId);
		}
	};
</script>

<div class="admin-container">
	<select class="admin-select" bind:value={selectedProvId}>
		<option value="">Select province...</option>
		{#each provinces as feature}
			<option value={feature.properties.id}>{feature.properties.name}</option>
		{/each}
	</select>

	{#if selectedProvId}
		<select class="admin-select" bind:value={selectedDistId}>
			<option value="">Select district...</option>
			{#each districts as feature}
				<option value={feature.properties.id}>{feature.properties.name}</option>
			{/each}
		</select>
	{/if}
	{#if selectedProvId && selectedDistId}
		<select class="admin-select" bind:value={selectedSectId}>
			<option value="">Select sector...</option>
			{#each sectors as feature}
				<option value={feature.properties.id}>{feature.properties.name}</option>
			{/each}
		</select>
	{/if}
	{#if selectedProvId && selectedDistId && selectedSectId}
		<select class="admin-select" bind:value={selectedCellId}>
			<option value="">Select cell...</option>
			{#each cells as feature}
				<option value={feature.properties.id}>{feature.properties.name}</option>
			{/each}
		</select>
	{/if}
	{#if selectedProvId && selectedDistId && selectedSectId && selectedCellId}
		<select class="admin-select" bind:value={selectedVillId}>
			<option value="">Select village...</option>
			{#each villages as feature}
				<option value={feature.properties.id}>{feature.properties.name}</option>
			{/each}
		</select>
	{/if}
</div>

<style lang="scss">
	.admin-container {
		display: flex;
		flex-direction: column;

		.admin-select {
			cursor: pointer;
			width: 100%;
			height: 40px;
			font-size: 1em;
			padding: 10px;
			margin-bottom: 0.5rem;
		}

		select {
			width: 100%;
			border-radius: 4px;
			border-color: #485fc7;
			box-sizing: border-box;
			background: transparent;
			-webkit-appearance: none;
			cursor: pointer;
			background: #fff
				url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%3E%3Cpath%20d%3D%22M4.33%208.5L0%201L8.66%201z%22%20fill%3D%22%23666%22%2F%3E%3C%2Fsvg%3E')
				right 10px center no-repeat;
			padding: 12px 35px 12px 11px;
			color: #000;

			/* Firefox hide arrow */
			-moz-appearance: none;
			text-indent: 0.01px;
			text-overflow: '';
		}
		/* IE10 hide arrow */
		select::-ms-expand {
			display: none;
		}
	}
</style>
