<script>
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto mt-[32px] w-[1200px] pb-8 font-sans">
	<div class="mb-[16px] flex h-[36px] w-[1200px] items-center justify-between">
		<h2 class="text-2xl font-semibold text-gray-900">Tour and Trips</h2>
		<a
			href={resolve('/explore/packages')}
			class="text-sm font-medium text-gray-600 transition-colors hover:text-[#0084FF]">Show More</a
		>
	</div>

	<div class="grid w-[1200px] grid-cols-4 gap-[16px]">
		<div
			class="flex h-[458px] w-[288px] flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					>
						<svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
							/></svg
						>
					</div>
					<span class="text-sm font-semibold text-gray-800">Central Bali Trans</span>
				</div>
				<span class="rounded bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold text-white">Gold</span>
			</div>

			<div class="relative h-[240px] w-full shrink-0 bg-gray-100">
				<img src="/img/banana.jpg" alt="Mini Cooper" class="h-full w-full object-cover" />

				<div
					class="absolute top-3 left-0 rounded-r bg-[#0084FF] px-3 py-1 text-[11px] font-bold text-white"
				>
					Shuttle
				</div>

				<button
					type="button"
					aria-label="Save to favorites"
					class="absolute top-3 right-3 text-white/80 transition-colors hover:text-white"
				>
					<svg class="h-6 w-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						/></svg
					>
				</button>
			</div>

			<div class="flex h-[150px] flex-col justify-between p-[18px]">
				<div class="flex flex-col gap-[8px]">
					<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
						Rent Luxury Car - Mini Cooper 2018 ( 5 Days)
					</h3>
					<p class="text-[11px] text-gray-500">No facility provided.</p>
					<div class="flex items-center gap-1 text-xs font-semibold text-gray-600">
						<svg class="h-4 w-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						0
					</div>
				</div>
				<div class="flex items-end justify-between">
					<span class="text-base font-bold text-[#0084FF]">Rp 17.500.000</span>
					<span class="text-[11px] text-gray-500">5 Days</span>
				</div>
			</div>
		</div>

		<div
			class="flex h-[458px] w-[288px] flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					>
						<svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
							/></svg
						>
					</div>
					<span class="text-sm font-semibold text-gray-800">Central Bali Trans</span>
				</div>
				<span class="rounded bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold text-white">Gold</span>
			</div>
			<div class="relative h-[240px] w-full shrink-0 bg-gray-100">
				<img src="/img/babi.jpeg" alt="BMW" class="h-full w-full object-cover" />
				<div
					class="absolute top-3 left-0 rounded-r bg-[#0084FF] px-3 py-1 text-[11px] font-bold text-white"
				>
					Shuttle
				</div>
				<button
					type="button"
					aria-label="Save to favorites"
					class="absolute top-3 right-3 text-white/80 transition-colors hover:text-white"
				>
					<svg class="h-6 w-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						/></svg
					>
				</button>
			</div>
			<div class="flex h-[150px] flex-col justify-between p-[18px]">
				<div class="flex flex-col gap-[8px]">
					<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
						Rent Luxury Car - BMW 320e ( 4 Days)
					</h3>
					<p class="text-[11px] text-gray-500">No facility provided.</p>
					<div class="flex items-center gap-1 text-xs font-semibold text-gray-600">
						<svg class="h-4 w-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						0
					</div>
				</div>
				<div class="flex items-end justify-between">
					<span class="text-base font-bold text-[#0084FF]">Rp 6.000.000</span>
					<span class="text-[11px] text-gray-500">4 Days</span>
				</div>
			</div>
		</div>

		<div
			class="flex h-[458px] w-[288px] flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					>
						<svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
							/></svg
						>
					</div>
					<span class="text-sm font-semibold text-gray-800">Central Bali Trans</span>
				</div>
				<span class="rounded bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold text-white">Gold</span>
			</div>
			<div class="relative h-[240px] w-full shrink-0 bg-gray-100">
				<img src="/img/3.jpg" alt="Tour Bedugul" class="h-full w-full object-cover" />
				<button
					type="button"
					aria-label="Save to favorites"
					class="absolute top-3 right-3 text-white/80 transition-colors hover:text-white"
				>
					<svg class="h-6 w-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						/></svg
					>
				</button>
			</div>
			<div class="flex h-[150px] flex-col justify-between p-[18px]">
				<div class="flex flex-col gap-[8px]">
					<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
						One Day Tour Bedugul & Tanah Lot Trip with Avanza
					</h3>
					<p class="text-[11px] text-gray-500">No facility provided.</p>
					<div class="flex items-center gap-1 text-xs font-semibold text-gray-600">
						<svg class="h-4 w-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						0
					</div>
				</div>
				<div class="flex items-end justify-between">
					<span class="text-base font-bold text-[#0084FF]">Rp 750.000</span>
					<span class="text-[11px] text-gray-500">1 Days</span>
				</div>
			</div>
		</div>

		<div
			class="flex h-[458px] w-[288px] flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					>
						<svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
							/></svg
						>
					</div>
					<span class="text-sm font-semibold text-gray-800">Buroq Travel Agency</span>
				</div>
				<span class="rounded bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold text-white">Gold</span>
			</div>
			<div class="relative h-[240px] w-full shrink-0 bg-gray-100">
				<img src="/img/2.jpg" alt="Tour Cirebon" class="h-full w-full object-cover" />
				<button
					type="button"
					aria-label="Save to favorites"
					class="absolute top-3 right-3 text-white/80 transition-colors hover:text-white"
				>
					<svg class="h-6 w-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						/></svg
					>
				</button>
			</div>
			<div class="flex h-[150px] flex-col justify-between p-[18px]">
				<div class="flex flex-col gap-[8px]">
					<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
						Private Tour Cirebon 2 Hari 1 Malam
					</h3>
					<p class="text-[11px] text-gray-500">Attractions, Foods, Hotels</p>
					<div class="flex items-center gap-1 text-xs font-semibold text-gray-600">
						<svg class="h-4 w-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						0
					</div>
				</div>
				<div class="flex items-end justify-between">
					<span class="text-base font-bold text-[#0084FF]">Rp 3.000.000</span>
					<span class="text-[11px] text-gray-500">1 Days</span>
				</div>
			</div>
		</div>
	</div>
</section>
