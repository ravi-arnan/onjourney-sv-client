<!-- LoadMoreButton.svelte -->
<script>
	let { hasMore, onLoadMore } = $props();
</script>

{#if hasMore}
	<div class="mt-8 mb-2 flex justify-center">
		<button
			onclick={onLoadMore}
			class="text-2sm rounded-lg bg-[#2097f5] px-5.5 py-3.5 font-medium text-white shadow-sm"
		>
			Load More
		</button>
	</div>
{/if}
