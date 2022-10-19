<script lang="ts">
	import { config } from '$config';
	import ZoomToAdminControl from './ZoomToAdminControl.svelte';
	export let isSearchTabVisible = false;
</script>

{#if isSearchTabVisible}
	{#if config.adminBoundary}
		<div class="card">
			<div class="card-content">
				<p class="title is-6">Zoom to admin</p>
			</div>
			<div class="content mx-4 mb-4">
				<ZoomToAdminControl />
			</div>
		</div>
	{/if}
{/if}
