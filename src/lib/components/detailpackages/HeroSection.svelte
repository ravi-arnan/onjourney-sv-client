<!-- HeroSection.svelte -->
<script>
  let { isSaved = false, onSaveToggle } = $props();
</script>


<!-- Hero Image -->
<div class="mb-4 overflow-hidden rounded-2xl bg-gray-100">
  <img
    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
    alt="East Bali Tour rafting"
    class="h-[220px] w-full object-cover md:h-[320px]"
  />
</div>

<!-- Agent row: card (left) + Save/Share buttons (right) -->
<div class="mb-6 flex items-center justify-between gap-3 border-b border-gray-200 pb-6">

  <!-- Agent Card — auto width, not full width -->
  <div class="inline-flex min-w-0 items-center gap-3 rounded-2xl border border-gray-300 bg-white px-4 py-3 sm:px-5">
    <div class="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center">
      <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
    <div class="min-w-0">
      <p class="truncate text-[15px] font-semibold leading-tight text-gray-900">Central Bali Trans</p>
      <div class="mt-1 flex items-center gap-1">
      <svg class="h-3.5 w-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <span class="text-[15px] font-semibold text-green-500">5.0</span>
    </div>
    </div>
  </div>

  <!-- Save / Share buttons -->
  <div class="flex items-center gap-2 sm:gap-3">
    <button
      onclick={onSaveToggle}
      class="flex h-10 items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 text-sm font-semibold text-[#267df0] transition hover:bg-blue-50"
    >
      <svg class="h-4 w-4 {isSaved ? 'fill-current' : 'fill-none stroke-current'}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      Save
    </button>
    <button
      onclick={() => {}}
      class="flex h-10 items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 text-sm font-semibold text-[#267df0] transition hover:bg-blue-50"
    >
      <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
      </svg>
      Share
    </button>
  </div>

</div>

