<!-- Categories.svelte -->
<script>
  let { categories = ['Nature', 'Agriculture', 'Adventure', 'Nautical'] } = $props();
</script>

<section class="mb-7">
  <h2 class="text-sm font-semibold text-gray-800 mb-3">Categories</h2>
  <div class="flex flex-wrap gap-2">
    {#each categories as cat}
      <span class="px-4.5 py-3 rounded-full border border-blue-300 text-xs text-blue-600 font-medium bg-white hover:bg-blue-50 cursor-pointer transition-colors">{cat}</span>
    {/each}
  </div>
</section>