<script lang="ts">
	import { config } from '../../config';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';
	import CollapsiblePanel from './CollapsiblePanel.svelte';
	export let isSearchTabVisible = false;

	let panelAdminOpen = true;
</script>

{#if isSearchTabVisible}
	<div class="accordion-container">
		{#if config.adminBoundary}
			<CollapsiblePanel title="Zoom to admin" bind:isPanelOpen={panelAdminOpen}>
				<div class="card-content">
					<ZoomToAdminControl />
				</div>
			</CollapsiblePanel>
		{/if}
	</div>
{/if}

<style lang="scss">
</style>
