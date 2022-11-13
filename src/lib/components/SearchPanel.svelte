<script lang="ts">
	import { config } from '$config';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';
	export let isSearchTabVisible = false;
</script>

{#if isSearchTabVisible}
	{#if config.adminBoundary}
		<div class="search-panel">
			<div class="panel-title">Zoom to admin</div>
			<div class="panel-contents">
				<ZoomToAdminControl />
			</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	.search-panel {
		display: flex;
		flex-direction: column;
		margin: 0.5rem;

		.panel-title {
			font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
				sans-serif;
			font-size: 20px;
			font-weight: 600;
			margin-left: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.panel-contents {
			margin-left: 0.5rem;
		}
	}
</style>
