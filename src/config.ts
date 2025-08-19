import type { Config } from './lib/types';

export const config: Config = {
	title: 'WASAC Rural Water Network',
	url: 'https://wasac.rw',
	logo: 'https://raw.githubusercontent.com/wasac/logo/main/logo.png',
	basePath: process.env.NODE_ENV === 'production' ? '' : '',
	// change attribution to yours
	attribution: "©<a href='http://wasac.rw'>WASAC,Ltd.</a>",
	// change stylefiles URLs to yours
	styles: [
		{
			title: 'OSM',
			uri: `https://wasac.github.io/mapbox-stylefiles/unvt/style.json`
		},
		{
			title: 'OSM (Open Building)',
			uri: `https://wasac.github.io/mapbox-stylefiles/unvt/style-buildings.json`
		},
		{
			title: 'Bing Aerial',
			uri: `https://wasac.github.io/mapbox-stylefiles/unvt/style-aerial.json`
		}
	],
	// change initial location and zoom level to yours
	center: [30.0291, -2.0032],
	zoom: 9,
	// you can put your geojson file for searching functions
	search: {
		url: 'https://wasac.github.io/vt/wss.geojson',
		target: ['wss_name', 'district', 'po_name'],
		format: (p) => {
			return `${p.wss_id}-${p.wss_name}, ${p.po_name}, ${p.district}`;
		},
		place_type: ['wss'],
		placeholder: 'Search WSS/PO/District',
		limit: 10,
		zoom: 13
	},
	// please specify layers' name for showing popup with attributes table.
	popup: {
		target: [
			'handpump',
			'improvedspring',
			'dugwell',
			'solarpump',
			'otherwaterpoint',
			'household',
			'publictap',
			'waterkiosk',
			'industrial',
			'institution',
			'other connection',
			'chamber',
			'reservoir',
			'pumping-station',
			'watersource',
			'pipeline',
			'wss',
			'pg-building',
			'uwss-customers',
			'uwss-fire-hydrant',
			'uwss-manhole',
			'uwss_pipeline_annotation',
			'uwss_pipeline',
			'uwss-pumping-station',
			'uwss-reservoir',
			'uwss-valve',
			'uwss-water-meter',
			'uwss-water-treatment-plant',
			'uwss-watersource',
			'ecd_point',
			'health_facility_point',
			'school_point',
			'office_point'
		]
	},
	// please specify your covered area if you have multipul locations to do waterworks
	// areaSwitcher: {
	// 	areas: [
	// 		{ title: 'Narok', latlng: [35.87063, -1.08551], zoom: 14 },
	// 		{ title: "Ololulung'a", latlng: [35.65072, -1.0085], zoom: 13 },
	// 		{ title: 'Kilgoris', latlng: [34.87533, -1.00278], zoom: 14 },
	// 		{ title: 'Suswa', latlng: [36.33078, -1.05307], zoom: 13 }
	// 	]
	// },
	// please specify layer name for showing in legend panel.
	legend: {
		targets: {
			village: 'Village',
			'village-annotation': 'Village Label',
			cell: 'Cell',
			'cell-annotation': 'Cell Label',
			sector: 'Sector',
			'sector-annotation': 'Sector Label',
			district: 'District',
			'district-annotation': 'District Label',
			wss: 'WSS',
			'wss-annotation': 'WSS Label',
			pipeline: 'Pipeline',
			pipeline_annotation: 'Pipeline Label',
			watersource: 'Water Source',
			reservoir: 'Reservoir',
			'pumping-station': 'Pumping Station',
			chamber: 'Chamber',
			household: 'Household',
			publictap: 'Public Tap',
			waterkiosk: 'Water Kiosk',
			industrial: 'Industrial',
			institution: 'Institution',
			'other connection': 'Other connection',
			handpump: 'Hand Pump',
			improvedspring: 'Improved Spring',
			dugwell: 'Dug well',
			solarpump: 'Solar Pump',
			otherwaterpoint: 'Other water point',
			parcels: 'Parcels',
			parcels_annotation: 'Parcels Label',
			'contour-line': 'Countour',
			'contour-label': 'Contour Label',
			hillshade: 'Hillshade',
			'uwss-customers': 'Customers (Urban)',
			'uwss-fire-hydrant': 'Fire hydrant (Urban)',
			'uwss-manhole': 'Manhole (Urban)',
			uwss_pipeline_annotation: 'Pipeline Label (Urban)',
			uwss_pipeline: 'Pipeline (Urban)',
			'uwss-pumping-station': 'Pump (Urban)',
			'uwss-reservoir': 'Reservoir (Urban)',
			'uwss-valve': 'Valve (Urban)',
			'uwss-water-meter': 'Water meter (Urban)',
			'uwss-water-treatment-plant': 'Water treatment plant (Urban)',
			'uwss-watersource': 'Water source (Urban)',
			ecd: 'Early Children Development Center (building)',
			ecd_point: 'Early Children Development Center',
			ecd_point_anotation: 'Early Children Development Center (label)',
			health_facility: 'Health facility (building)',
			health_facility_point: 'Health facility',
			health_facility_point_anotation: 'Health facility (label)',
			school: 'School (building)',
			school_point: 'School',
			school_point_anotation: 'School (label)',
			office: 'Office (building)',
			office_point: 'Office',
			office_point_anotation: 'Office (label)'
		}
	},
	measureOptions: {
		distanceUnit: 'kilometers',
		distancePrecision: 2,
		areaUnit: 'metric',
		areaPrecision: 2,
		fontGlyphs: ['Roboto Regular'],
		terrainSource: {
			url: 'https://wasac.github.io/rw-terrain/tiles/{z}/{x}/{y}.png',
			encoding: 'mapbox',
			tileSize: 512,
			minzoom: 5,
			maxzoom: 15,
			tms: false
		}
	},
	valhalla: {
		url: 'https://valhalla.water-gis.com',
		isoChroneOptions: {
			Contours: [
				{
					time: 3,
					distance: 1,
					color: 'ff0000'
				},
				{
					time: 5,
					distance: 2,
					color: 'ffff00'
				},
				{
					time: 10,
					distance: 3,
					color: '0000ff'
				},
				{
					time: 15,
					distance: 4,
					color: 'ff00ff'
				}
			],
			isochrone: {
				font: ['Roboto Medium'],
				fontSize: 14,
				fontHalo: 3,
				fontColor: '#263238',
				fontHaloColor: '#fff'
			}
		},
		routingOptions: {
			font: ['Roboto Medium'],
			fontSize: 14,
			fontHalo: 3,
			fontColor: '#263238',
			fontHaloColor: '#fff',
			iconImage: 'marker',
			iconSize: 1
		}
	},
	terrain: {
		source: 'rwanda-dem',
		exaggeration: 1
	},
	attributeTable: {
		rowsPerPage: 50,
		minZoom: 14
	},
	adminBoundary: {
		url: 'https://wasac.github.io/rw-admin-boundary'
	},
	tour: {
		tourGuideOptions: {
			steps: [
				{
					title: 'Welcome to Rural Water Map in WASAC!',
					content: `This tutorial is going to take you around the main features of the application. <br> Let's begin!`,
					order: 1
				},
				{
					title: 'Geospatial analytics tools',
					content: `
							<div style="max-height: 300px; overflow-y: auto">
							Click this button to start analysing the datasets.
							<br><br>
							In the <b>Layers</b> tab, 
							<br>
							<img src="/assets/tutorial/style-switcher.png" height="32px"/>
							firstly you can switch base maps either OSM or aerial from the below select box.
							<br>
							<img src="/assets/tutorial/eye-solid.svg" width="24px"/>
							<br>
							You can also switch layer visibility by clicking this button.
							<br>
							<img src="/assets/tutorial/palette-solid.svg" width="24px"/>
							<br>
							From the above palette button, you can edit layer style as you want.
							<br><br>
							In <b>Advanced</b> tab, there are three main features:
							<br>
							<b>1) routing tool</b>;
							<br>
							<img src="/assets/tutorial/routing-tool.png" width="100%"/>
							<br>
							Click "Start routing" button, then you can calculate the shortest route by clicking on the route on the map with your prefered means of transport.
							<br>
							<br>
							<b>2)isochrone analysis tool</b>.
							<br>
							<img src="/assets/tutorial/isochrone-tool.png" width="100%"/>
							<br>Isochrone is a very powerful tool to estimate contours by certain time or distance by selected transport option. It can be used for some SDG indicator such as "Water access within 30 minute round trip".
							<br>
							<img src="/assets/tutorial/isochrone-example.png" width="100%"/>
							</div>
							`,
					target: '.maplibregl-ctrl-menu',
					order: 2
				},
				{
					title: 'Attribute table tool',
					content: `<div style="max-height: 300px; overflow-y: auto">
							Click this button to start exploring attributes data of selected layer. 
							You can also filter the data by keyword, and sort them, zoom to the select feature.
							<br>
							<img src="/assets/tutorial/attr-table-selectbox.png" width="100%"/>
							<br>
							Firstly, select a layer to show attribute table. The table will show all records within current map extent. Please refresh table if you move map.
							<br>
							<img src="/assets/tutorial/magnifying-glass-plus-solid.svg" width="24px"/>
							<br>
							You can zoom to selected feature by clicking the above button.
							<br>
							<img src="/assets/tutorial/up-down-left-right-solid.svg" width="24px"/>
							<br>
							You can pan to selected feature by clicking the above button.
							</div>`,
					target: '.maplibregl-ctrl-attribute-table',
					order: 3
				},
				{
					title: 'Sharing tool',
					content:
						'This button enables you to copy and share URL of current map with your colleagues.',
					target: '.maplibregl-ctrl-share',
					order: 4
				},
				{
					title: 'Query tool',
					content: `This button enables you to query details information of selected features on the map. If the tool is enabled, you can click the feature on the map to enquiry details information.`,
					target: '.maplibregl-ctrl-identify',
					order: 5
				},

				{
					title: 'Search features',
					content: `You can search features by typing keywords from the searching box.`,
					target: '.maplibregl-ctrl-geocoder',
					order: 6
				},
				{
					title: 'Measure tool',
					content: `This button enables you to distance (line) and area (polygon) measurement on the map. You can also query elevation of the point or each node of the line.`,
					target: '.maplibregl-terradraw-measure-render-button',
					order: 7
				},
				{
					title: 'Export tool',
					content: `This button enables you to export images with your preferences.<br>You can choose file size, image format (png, jpeg, pdf and svg), and DPI resolution, orientation of the exported image`,
					target: '.maplibregl-export-control',
					order: 8
				},
				{
					title: 'Area switching tool',
					content: `You can switch the map to the selected area instantly.`,
					target: '.maplibregl-area-switcher',
					order: 0
				},
				{
					title: 'Terrain tool',
					content: `If this is enabled, 3D terrain landscape will be shown. In order to use this, you can tilt the map by holding right-click (mouse) or two fingers (smartphone or tablet)`,
					target: '.maplibregl-ctrl-terrain',
					order: 10
				},
				{
					title: 'GNSS positioning tool',
					content: `GNSS positioning your current location is available by clicking this button.`,
					target: '.maplibregl-ctrl-geolocate',
					order: 11
				}
			],
			rememberStep: true
		},
		tourControlOptions: {
			localStorageKey: `watergis-wasac-{url}`
		}
	}
};
