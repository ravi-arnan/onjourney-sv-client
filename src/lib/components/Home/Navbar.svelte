<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';

	let activeRoute = $derived($page.url.pathname);

	function linkClass(route: string) {
		return `flex h-full items-center gap-[8px] px-[24px] py-[16px] text-sm font-semibold transition-colors ${
			activeRoute === route
				? 'border-b-2 border-[#0084FF] text-[#0084FF]'
				: 'text-gray-500 hover:text-gray-900'
		}`;
	}

	function imgClass(route: string) {
		return `h-5 w-5 object-contain ${activeRoute === route ? '' : 'opacity-50 grayscale'}`;
	}
</script>

<div class="h-[56px] w-full border-b border-gray-200 bg-white font-sans">
	<div
		class="mx-auto flex h-full max-w-[1200px] items-center gap-[10px] overflow-x-auto px-6 whitespace-nowrap"
	>
		<a href={resolve('/explore/packages')} class={linkClass('/explore/packages')}>
			<img src="/Explore.jpeg" alt="Icon" class={imgClass('/explore/packages')} />
			Explore
		</a>

		<a href={resolve('/explore/agents')} class={linkClass('/explore/agents')}>
			<img src="/travelagent.jpeg" alt="Icon" class={imgClass('/explore/agents')} />
			Travel Agent
		</a>

		<a href={resolve('/trip/personalized')} class={linkClass('/trip/personalized')}>
			<img src="/Personalizedtrip.jpeg" alt="Icon" class={imgClass('/trip/personalized')} />
			Personalized Trip
		</a>

		<a href={resolve('/transport')} class={linkClass('/transport')}>
			<img src="/Transport.jpeg" alt="Icon" class={imgClass('/transport')} />
			Transport
		</a>

		<a href={resolve('/travel-story')} class={linkClass('/travel-story')}>
			<img src="/TravelStory.jpeg" alt="Icon" class={imgClass('/travel-story')} />
			Travel Story
		</a>
	</div>
</div>
