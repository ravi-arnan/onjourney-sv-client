<script>
	import { page } from '$app/stores';

	let { pkg, onToggleLike } = $props();

	const slug = $derived($page.params.slug);
	const detailUrl = $derived(`/travel-agent/${slug}/packages/detailpackages/${pkg.id}`);
</script>

<div
	class="relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
>
	<!-- Package Header -->
	<div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
		<div class="flex items-center gap-1.5">
			<div
				class="h-5 w-5 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-yellow-50"
			>
				<img src='/agent-logo.png' alt={pkg.agentName} class="h-full w-full object-cover" />
			</div>
			<span class="line-clamp-1 text-md font-semibold hover:underline">PT. Bali Sundaram...</span>
		</div>
		<span class="rounded-lg px-2 py-0.5 text-xs font-semibold bg-yellow-400 text-black">Gold</span>
	</div>

	<!-- Package Image -->
	<a href={detailUrl}>
		<div class="relative h-40 overflow-hidden bg-blue-100">
			{#if pkg.image}
				<img
					src={pkg.image}
					alt={pkg.title}
					class="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
				/>
			{:else}
				<div
					class="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600 transition-transform duration-300 hover:scale-110"
				>
					<span class="px-2 text-center text-xs font-bold text-white opacity-80"
						>{pkg.title.split(' ').slice(0, 4).join(' ')}</span
					>
				</div>
			{/if}
		</div>
	</a>
	<button
		type="button"
		class="group absolute top-14 right-2 z-[2] flex h-7 w-7 items-center justify-center rounded-full bg-white/30 text-white transition-colors duration-300 hover:bg-white/50"
		aria-label="Add to favourites"
		onclick={() => onToggleLike?.(pkg)}
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
	</button>

	<!-- Package Info -->
	<div class="space-y-2.5 p-5">
		<a href={detailUrl} class="hover:underline">
			<h4 class="line-clamp-2 leading-snug text-base font-semibold text-gray-900">{pkg.title}</h4>
		</a>
		<p class="text-xs text-gray-400">{pkg.tags}</p>
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
		<div class="flex items-center justify-between border-t border-gray-100 pt-4">
			<span class="text-sm font-semibold text-blue-600">{pkg.price}</span>
			<span class="text-xs text-gray-500">{pkg.days}</span>
		</div>
	</div>
</div>
