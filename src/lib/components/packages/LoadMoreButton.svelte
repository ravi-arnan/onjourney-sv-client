<!-- LoadMoreButton.svelte -->
<script>
	let { hasMore, onLoadMore } = $props();
</script>

{#if hasMore}
	<div class="mt-8 mb-2 flex justify-center">
		<button
			onclick={onLoadMore}
			class="rounded-lg bg-[#2097f5] px-5.5 py-3.5 text-2sm font-medium text-white shadow-sm  "
		>
			Load More
		</button>
	</div>
{/if}
