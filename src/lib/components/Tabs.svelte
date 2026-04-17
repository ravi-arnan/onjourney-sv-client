<!-- Tabs.svelte -->
<script>
	import { page } from '$app/stores';

	let { slug = 'bali-sundaram-travel' } = $props();

	// Determine active tab based on URL pathname (using derived for Svelte 5 runes mode)
	let activeTab = $derived($page.url.pathname.includes('/packages') ? 'packages' : 'overviews');

	let overviewPath = $derived(`/travel-agent/${slug}`);
	let packagesPath = $derived(`/travel-agent/${slug}/packages`);
</script>

<div class="mb-6 flex border-b border-gray-200">
	<!-- Overview Tab -->
	<a
		href={overviewPath}
		class="border-b-3 px-5 py-3.5 text-2sm font-semibold transition-colors"
		class:text-[#339ff5]={activeTab === 'overviews'}
		class:border-[#339ff5]={activeTab === 'overviews'}
		class:text-[#222222]={activeTab !== 'overviews'}
		class:border-transparent={activeTab !== 'overviews'}
	>
		Overviews
	</a>

	<!-- Packages Tab -->
	<a
		href={packagesPath}
		class="border-b-3 px-5 py-3.5 text-2sm font-semibold transition-colors"
		class:text-[#339ff5]={activeTab === 'packages'}
		class:border-[#339ff5]={activeTab === 'packages'}
		class:text-[#222222]={activeTab !== 'packages'}
		class:border-transparent={activeTab !== 'packages'}
	>
		Packages
	</a>
</div>
