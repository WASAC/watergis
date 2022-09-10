<script lang="ts">
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
	import IconButton, { Icon } from '@smui/icon-button';
	import { config } from '../../config';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';
	export let isSearchTabVisible = false;

	let panelAdminOpen = true;
</script>

{#if isSearchTabVisible}
	<div class="accordion-container">
		<Accordion multiple>
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
		</Accordion>
	</div>
{/if}

<style lang="scss">
</style>
