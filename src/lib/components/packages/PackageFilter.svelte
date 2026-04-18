<!-- PackageFilter.svelte -->
<script>
	let { activeFilter, onFilterChange } = $props();
</script>

<div class="mb-6 flex flex-wrap gap-1.5">
	{#each [['all', 'All Packages'], ['seasonal', 'Seasonal'], ['non-seasonal', 'Non Seasonal']] as [val, label] (val)}
		<button
			class="rounded-full border px-4 py-2.5 text-sm font-medium transition-all {activeFilter ===
			val
				? 'border-[#2097f5] bg-[#2097f5] text-white'
				: 'hover:text--500 border-gray-300 bg-white text-black hover:bg-gray-200'}"
			onclick={() => onFilterChange(val)}
		>
			{label}
		</button>
	{/each}
</div>
