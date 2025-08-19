<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { config } from '../../config';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';

	let windowHeight: number = $state(0);
	let tabHeight: Writable<number> = getContext('tab-height');

	let contentHeight = $derived(windowHeight - $tabHeight - 20);
</script>

<svelte:window bind:innerHeight={windowHeight} />

{#if config.adminBoundary}
	<div class="search-panel" style="height:{contentHeight}px;">
		<div class="panel-title">Zoom to admin</div>
		<div class="panel-contents">
			<ZoomToAdminControl />
		</div>
	</div>
{/if}

<style lang="scss">
	.search-panel {
		display: flex;
		flex-direction: column;
		margin: 0.5rem;

		.panel-title {
			font-family:
				system-ui,
				-apple-system,
				system-ui,
				'Helvetica Neue',
				Helvetica,
				Arial,
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
