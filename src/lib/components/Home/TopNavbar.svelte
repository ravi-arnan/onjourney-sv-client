<script>
	// TopNavbar.svelte
	import { resolve } from '$app/paths';
	import OnJourneyBrand from '$lib/components/brand/OnJourneyBrand.svelte';
</script>

<div class="w-full border-b border-gray-200 bg-white font-sans">
	<div class="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-6">
		<OnJourneyBrand href="/" className="transition-opacity hover:opacity-80" />

		<div class="flex items-center gap-6 text-sm font-medium text-gray-800">
			<a
				href="https://landing.onjourney.id/become-our-partner"
				target="_blank"
				rel="noopener noreferrer"
				class="whitespace-nowrap transition-colors hover:text-[#0084FF]"
			>
				Join as Travel Agent
			</a>

			<button
				class="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#0084FF]"
			>
				English (IDR)
				<svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			<div class="ml-2 flex items-center gap-4">
				<a
					href={resolve('/auth/login')}
					class="text-[#0084FF] transition-colors hover:text-blue-700">Login</a
				>
				<a
					href={resolve('/auth/register')}
					class="rounded-md bg-[#0084FF] px-6 py-2 whitespace-nowrap text-white transition-colors hover:bg-blue-600"
					>Sign Up</a
				>
			</div>
		</div>
	</div>
</div>
