<script>
	import { page } from '$app/stores';
	import { Globe } from 'lucide-svelte';

	const slug = $derived($page.params.slug);
	const profile = $derived.by(() => {
		if (slug === '1' || slug === 'jatiluwih_escape_57') {
			return {
				name: 'Jatiluwih Escape',
				joined: 'Joined in December 2025',
				packages: '16 Packages'
			};
		}

		return {
			name: 'PT. Bali Sundaram Travel',
			joined: 'Joined in July 2025',
			packages: '15 Packages'
		};
	});
</script>

<aside class="sticky top-25 w-full shrink-0 self-start">
	<div>
		<div class="rounded-xl border border-gray-200 p-6 text-start">
			<div
				class="mb-4 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-2"
			>
				<div class="flex h-12 w-12 items-center justify-center text-gray-300">
					<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M4 16l4.5-4.5a2 2 0 012.8 0L16 16m-2-2l1.5-1.5a2 2 0 012.8 0L20 14M8 8h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
			</div>

			<div class="mb-1 flex items-center justify-start gap-1.5">
				<h2 class="text-2xl font-bold text-gray-900">{profile.name}</h2>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<circle cx="8" cy="8" r="7" stroke="#60a5fa" stroke-width="1.5" />
					<path
						d="M5 8l2 2 4-4"
						stroke="#60a5fa"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<p class="mb-4 text-sm text-gray-600">{profile.joined}</p>

			<div
				class="mb-3 flex w-2/3 justify-around overflow-hidden rounded-lg border border-gray-200 py-3"
			>
				<div class="flex flex-row flex-wrap items-center justify-center gap-1.5">
					<img src="/img/sf.png" class="inline-block h-3.5 w-3.5" alt="star" />
					<span class="text-sm font-semibold">5.0</span>
				</div>
				<div class="border border-gray-200"></div>
				<div class="flex flex-row flex-wrap items-center justify-center text-sm text-gray-800">
					{profile.packages}
				</div>
			</div>

			<div class="flex items-center gap-2 py-2 text-sm text-gray-700">
				<img src="/img/sb1.png" class="inline-block h-3.5 w-3.5" alt="star" />
				0 Reviews
			</div>

			<div class="flex items-center gap-2 py-2">
				<Globe size={15} class="text-gray-700" />
			</div>

			<a href="#report" class=" mt-5 block text-sm text-gray-600 underline">Report this agent</a>
		</div>
	</div>
</aside>
