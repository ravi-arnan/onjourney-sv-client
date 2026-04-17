<!-- PackageCard.svelte -->
<script>
	import { page } from '$app/stores';

	let { pkg } = $props();

	const slug = $derived($page.params.slug);
	const detailUrl = $derived(`/travel-agent/${slug}/packages/detailpackages/${pkg.id}`);
</script>

<div class="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
	<div class="flex items-center justify-between border-b border-gray-100 bg-white p-3">
		<div class="flex items-center gap-2">
			<!-- Avatar -->
			<div class="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
				<img
					src="https://d2d89vszi48vxw.cloudfront.net/bali-sundaram.png"
					alt="PT. Bali Sundaram Travel"
					class="h-full w-full object-cover object-center opacity-100 transition-all duration-500 ease-in-out"
					loading="lazy"
					decoding="async"
				/>
			</div>
			<!-- Agent Name -->
			<div class="line-clamp-1 text-sm font-semibold">
				<a href={detailUrl} class="hover:underline">
					PT. Bali Sundaram Travel
				</a>
			</div>
		</div>

		<!-- Badge -->
		<div
			class="rounded-lg px-2 py-0.5 text-xs font-semibold {pkg.badge === 'Gold'
				? 'bg-yellow-400 text-black'
				: 'bg-cyan-500 text-white'}"
		>
			{pkg.badge}
		</div>
	</div>

	<!-- Image -->
	<a href={detailUrl}>
		<div class="relative">
			<!-- Image Container -->
			<div class="h-36 w-full overflow-hidden bg-gray-100">
				{#if pkg.image}
					<img
						src={pkg.image}
						alt={pkg.title}
						class="h-full w-full object-cover object-center opacity-100 transition-all duration-500 ease-in-out"
						loading="lazy"
						decoding="async"
					/>
				{:else}
					<div class="flex h-full w-full items-center justify-center bg-gray-100">
						<svg
							class="h-10 w-10 text-gray-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1"
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
					</div>
				{/if}
			</div>

			<!-- Heart Button -->
			<div
				class="group absolute top-2 right-2 z-[2] flex h-7 w-7 items-center justify-center rounded-full bg-white/30 text-white transition-colors duration-300 hover:bg-white/50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-neutral-800/50 transition-colors duration-300 group-hover:text-neutral-800/80"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>

			<!-- Shuttle Badge -->
			{#if pkg.badge === 'Shuttle'}
				<div
					class="bg-cs-blue-main absolute top-2 left-0 z-[5] rounded-r-full pt-[4px] pr-3.5 pb-[3px] pl-3 text-[11px] text-white"
				>
					Shuttle
				</div>
			{/if}
		</div>
	</a>

	<!-- Card Body -->
	<div class="space-y-2.5 p-4">
		<a href={detailUrl} class="hover:underline">
			<h3 class="line-clamp-2 text-base font-semibold text-gray-900">{pkg.title}</h3>
		</a>

		{#if pkg.noFacility}
			<div class="text-xs text-gray-500">No facility provided.</div>
		{:else if pkg.tags && pkg.tags.length > 0}
			<div class="line-clamp-1 text-xs text-gray-500">{pkg.tags.join(', ')}</div>
		{/if}

		<!-- Rating -->
		<div class="mt-2 flex items-center">
			<div class="flex text-yellow-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
			</div>
			<span class="ml-1 text-xs text-gray-600">{pkg.rating}</span>
		</div>

		<!-- Price & CO2 Badge -->
		<div class="mt-2 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
			<div class="flex items-baseline min-w-0 flex-shrink gap-1">
				<span class="truncate font-semibold text-blue-500">{pkg.price}</span>
				<span class="text-xs text-gray-500">{pkg.duration}</span>
			</div>
			
			<div class="flex flex-shrink-0 items-center justify-center gap-1.5 rounded-full border border-green-200 bg-[#ebfbf0] px-2 py-0.5 text-[11px] font-semibold tracking-wide text-[#166534]">
				<img src="/img/leaf.png" class="h-4 w-4" alt="CO2" />
				{pkg.co2 || '673.75 kg CO₂e'}
			</div>
		</div>
	</div>
</div>
