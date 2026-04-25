<!-- PackageGrid.svelte -->
<script>
	import PackageCard from './PackageCard.svelte';

	let { packages } = $props();
</script>

{#if packages.length > 0}
	<div class="package-grid">
		{#each packages as pkg (pkg.id)}
			<PackageCard {pkg} />
		{/each}
	</div>
{:else}
	<div class="py-14 text-center text-gray-400">
		<p class="text-sm">No packages found.</p>
	</div>
{/if}

<style>
	.package-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.package-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1280px) {
		.package-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
