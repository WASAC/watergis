<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLayerGroup, faChartSimple, faSearch } from '@fortawesome/free-solid-svg-icons';
	import LayerListPanel from './LayerListPanel.svelte';
	import AdvancedPanel from './AdvancedPanel.svelte';
	import SearchPanel from './SearchPanel.svelte';
	import { config } from '$config';

	enum TabNames {
		LAYERS = 'Layers',
		SEARCH = 'Search',
		ADVANCED = 'Advanced'
	}

	let tabs = [
		{
			icon: faLayerGroup,
			label: TabNames.LAYERS
		},
		{
			icon: faSearch,
			label: TabNames.SEARCH
		},
		{
			icon: faChartSimple,
			label: TabNames.ADVANCED
		}
	];
	let activeTab = tabs[0];
	let isLayersTabVisible = false;
	let isSearchTabVisible = false;
	let isAdvancedTabVisible = false;

	$: activeTab, changeActiveTab();
	const changeActiveTab = () => {
		isLayersTabVisible = false;
		isSearchTabVisible = false;
		isAdvancedTabVisible = false;
		switch (activeTab.label) {
			case TabNames.LAYERS:
				isLayersTabVisible = true;
				break;
			case TabNames.SEARCH:
				isSearchTabVisible = true;
				break;
			case TabNames.ADVANCED:
				isAdvancedTabVisible = true;
				break;
		}
	};
</script>

<div class="drawer-content">
	<a class="icon is-medium logo" href={config.url}>
		<img src={config.logo} alt="logo" />
	</a>
	<div class="tabs is-centered is-small mb-0">
		<ul>
			{#each tabs as tab}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class={activeTab.label === tab.label ? 'is-active' : ''}
					on:click={() => (activeTab = tab)}
				>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<span class="icon ml-2"><Fa icon={tab.icon} size="lg" aria-hidden="true" /></span>
						<span>{tab.label}</span>
					</a>
				</li>
				<li />{/each}
		</ul>
	</div>
	<LayerListPanel {isLayersTabVisible} />
	<SearchPanel {isSearchTabVisible} />
	<AdvancedPanel {isAdvancedTabVisible} />
</div>

<style lang="scss">
	@import 'bulma/bulma.sass';

	.logo {
		position: absolute;
		top: 0px;
		left: 0px;
		margin: 3px;
	}
</style>
