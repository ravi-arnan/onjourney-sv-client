<script>
	import { Bookmark, History } from 'lucide-svelte';
	import ExploreFilter from './ExploreFilter.svelte';
	import AgentFilter from './AgentFilter.svelte';
	import DestinationFilter from './DestinationFilter.svelte';

	let active = $state('Package'); // default ke Package
	let isOpen = $state(false); // panel tidak terbuka saat awal

	function selectTab(tab) {
		if (active === tab && isOpen) {
			isOpen = false;
		} else {
			active = tab;
			isOpen = true;
		}
	}

	function closeOverlay() {
		isOpen = false;
	}

	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-10 bg-black/40 transition-opacity duration-200"
		onclick={closeOverlay}
		role="presentation"
	></div>
{/if}

<div class="relative z-20 w-full border-b border-gray-200 bg-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
		<!-- TAB -->
		<div class="flex gap-6 text-sm font-medium text-gray-500">
			<button
				class={active === 'Package'
					? 'border-b-2 border-black pb-3 font-semibold text-black'
					: 'pb-3 transition-colors hover:text-gray-900'}
				onclick={() => selectTab('Package')}
			>
				Package
			</button>

			<button
				class={active === 'Agent'
					? 'border-b-2 border-black pb-3 font-semibold text-black'
					: 'pb-3 transition-colors hover:text-gray-900'}
				onclick={() => selectTab('Agent')}
			>
				Agent
			</button>

			<button
				class={active === 'Destination'
					? 'border-b-2 border-black pb-3 font-semibold text-black'
					: 'pb-3 transition-colors hover:text-gray-900'}
				onclick={() => selectTab('Destination')}
			>
				Destination
			</button>
		</div>

		<!-- RIGHT MENU -->
		<div class="flex items-center gap-6 text-sm text-gray-900">
			<button
				type="button"
				class="flex cursor-pointer items-center gap-2 transition-colors hover:text-black"
				onclick={() => goto(resolve('/saved'))}
			>
				<Bookmark class="h-4 w-4" />
				<span>Saved</span>
			</button>
			<button
				type="button"
				class="flex cursor-pointer items-center gap-2 transition-colors hover:text-black"
				onclick={() => goto(resolve('/travel-story'))}
			>
				<History class="h-4 w-4" />
				<span>History</span>
			</button>
		</div>
	</div>
</div>

<!-- PANEL FILTER -->
<div class={isOpen ? 'relative z-20 w-full bg-white shadow-md' : 'w-full bg-white'}>
	{#if active === 'Package'}
		<ExploreFilter />
	{:else if active === 'Agent'}
		<AgentFilter />
	{:else if active === 'Destination'}
		<DestinationFilter />
	{/if}
</div>
