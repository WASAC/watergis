import type { Config } from './lib/types';

export const config: Config = {
	title: 'WASAC Rural Water Network',
	url: 'https://wasac.rw',
	logo: 'https://raw.githubusercontent.com/wasac/logo/main/logo.png',
	basePath: process.env.NODE_ENV === 'production' ? '/watergis' : '',
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
			const label: string[] = [];
			const targets = ['wss_id', 'wss_name', 'po_name', 'district'];
			targets.forEach((target) => {
				if (p[target]) label.push(p[target]);
			});
			return label.length > 0 ? label.join(', ') : '';
		},
		place_type: ['wss'],
		placeholder: 'Search WSS/PO/District',
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
			'pg-building'
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
			hillshade: 'Hillshade'
		}
	},
	elevation: {
		url: 'https://wasac.github.io/rw-terrain/tiles/{z}/{x}/{y}.png',
		options: {
			tileSize: 512,
			font: ['Roboto Medium'],
			fontSize: 12,
			fontHalo: 1,
			mainColor: '#263238',
			haloColor: '#fff',
			units: 'kilometers'
		}
	},
	valhalla: {
		url: 'https://valhalla.water-gis.com',
		options: {
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
			]
		}
	},
	terrain: {
		source: 'narok-dem',
		exaggeration: 1
	}
};
