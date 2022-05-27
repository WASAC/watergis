<script lang="ts">
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { config } from '../config';
	import SearchControl from './SearchControl.svelte';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';
	import ZoomToAreaControl from './ZoomToAreaControl.svelte';
	export let isSearchTabVisible = false;

	export let parentPanelOpen = false;
	let panelZoomOpen = true;
	let panelSearchOpen = true;
	let panelAdminOpen = true;

	const zoomed = () => {
		parentPanelOpen = false;
	};
</script>

{#if isSearchTabVisible}
	<div class="accordion-container">
		<Accordion multiple>
			{#if config.areaSwitcher}
				<Panel bind:open={panelZoomOpen}>
					<Header>
						Zoom to area
						<IconButton slot="icon" toggle pressed={panelZoomOpen}>
							<Icon class="material-icons" on>expand_less</Icon>
							<Icon class="material-icons">expand_more</Icon>
						</IconButton>
					</Header>
					<Content>
						<ZoomToAreaControl on:zoomed={zoomed} />
					</Content>
				</Panel>
			{/if}
			{#if config.adminBoundary}
				<Panel bind:open={panelAdminOpen}>
					<Header>
						Zoom to admin
						<IconButton slot="icon" toggle pressed={panelAdminOpen}>
							<Icon class="material-icons" on>expand_less</Icon>
							<Icon class="material-icons">expand_more</Icon>
						</IconButton>
					</Header>
					<Content>
						<ZoomToAdminControl />
					</Content>
				</Panel>
			{/if}
			<Panel bind:open={panelSearchOpen}>
				<Header>
					Search
					<IconButton slot="icon" toggle pressed={panelSearchOpen}>
						<Icon class="material-icons" on>expand_less</Icon>
						<Icon class="material-icons">expand_more</Icon>
					</IconButton>
				</Header>
				<Content>
					<SearchControl on:zoomed={zoomed} />
				</Content>
			</Panel>
		</Accordion>
	</div>
{/if}

<style lang="scss">
</style>
