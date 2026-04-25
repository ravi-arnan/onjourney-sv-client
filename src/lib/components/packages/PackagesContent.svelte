<!-- PackagesContent.svelte -->
<script>
	import PackageFilter from './PackageFilter.svelte';
	import PackageGrid from './PackageGrid.svelte';
	import LoadMoreButton from './LoadMoreButton.svelte';

	let { activeFilter, displayedPackages, hasMore, onFilterChange, onLoadMore } = $props();
</script>

<div class="p-1">
	<PackageFilter {activeFilter} {onFilterChange} />

	<PackageGrid packages={displayedPackages} />

	<LoadMoreButton {hasMore} {onLoadMore} />
</div>
