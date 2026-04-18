<!-- Categories.svelte -->
<script>
	let { categories = ['Nature', 'Agriculture', 'Adventure', 'Nautical'] } = $props();
</script>

<section class="mb-7">
	<h2 class="mb-3 text-sm font-semibold text-gray-800">Categories</h2>
	<div class="flex flex-wrap gap-2">
		{#each categories as cat (cat)}
			<span
				class="cursor-pointer rounded-full border border-blue-300 bg-white px-4.5 py-3 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50"
				>{cat}</span
			>
		{/each}
	</div>
</section>
