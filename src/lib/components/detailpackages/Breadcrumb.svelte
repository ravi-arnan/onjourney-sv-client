<!-- Breadcrumb.svelte -->
<script>
	import { resolve } from '$app/paths';
</script>

<div class="pt-2 pb-2">
	<nav class="flex items-center gap-2 text-xs">
		{#each ['Explore', 'Indonesia', 'Bali', 'Nusa Penida', 'Travel Package'] as crumb (crumb)}
			<a
				href={resolve(`/${crumb.toLowerCase().replace(' ', '-')}`)}
				class="text-[#2097f5] hover:underline">{crumb}</a
			>
			<svg class="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
				></path></svg
			>
		{/each}
		<span class="text-gray-500">East Bali Tour</span>
	</nav>
</div>
