<!-- Tabs.svelte -->
<script>
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	let { slug = 'bali-sundaram-travel' } = $props();

	// Determine active tab based on URL pathname (using derived for Svelte 5 runes mode)
	let activeTab = $derived($page.url.pathname.includes('/packages') ? 'packages' : 'overviews');
</script>

<div class="mb-6 flex border-b border-gray-200">
	<!-- Overview Tab -->
	<a
		href={resolve(`/travel-agent/${slug}`)}
		class="text-2sm border-b-3 px-5 py-3.5 font-semibold transition-colors"
		class:text-[#339ff5]={activeTab === 'overviews'}
		class:border-[#339ff5]={activeTab === 'overviews'}
		class:text-[#222222]={activeTab !== 'overviews'}
		class:border-transparent={activeTab !== 'overviews'}
	>
		Overviews
	</a>

	<!-- Packages Tab -->
	<a
		href={resolve(`/travel-agent/${slug}/packages`)}
		class="text-2sm border-b-3 px-5 py-3.5 font-semibold transition-colors"
		class:text-[#339ff5]={activeTab === 'packages'}
		class:border-[#339ff5]={activeTab === 'packages'}
		class:text-[#222222]={activeTab !== 'packages'}
		class:border-transparent={activeTab !== 'packages'}
	>
		Packages
	</a>
</div>
