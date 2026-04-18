<script>
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto mt-[48px] flex w-[1200px] flex-col gap-[32px] pb-[80px] font-sans">
	<div class="flex h-[36px] w-[1200px] items-center justify-between">
		<h2 class="text-2xl font-semibold text-gray-900">Discover Travel Agent</h2>

		<div class="flex gap-[8px]">
			<button
				type="button"
				aria-label="Scroll discover section left"
				class="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
				</svg>
			</button>
			<button
				type="button"
				aria-label="Scroll discover section right"
				class="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
			>
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
				</svg>
			</button>
		</div>
	</div>

	<div class="grid w-[1200px] grid-cols-4 gap-[16px]">
		<div
			class="flex h-[456px] w-[288px] shrink-0 flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					></div>
					<span class="text-sm font-semibold text-gray-800">Bali Fast Trip</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="rounded bg-[#A855F7] px-2 py-0.5 text-[10px] font-bold text-white"
						>Titanium</span
					>
					<div class="flex items-center gap-1 text-xs font-bold text-[#10B981]">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						5.0
					</div>
				</div>
			</div>

			<div class="relative shrink-0 px-[18px]">
				<div
					class="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100"
				>
					<svg class="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path></svg
					>
					<button
						type="button"
						aria-label="Save agent"
						class="absolute top-[10px] right-[28px] text-gray-400 transition-colors hover:text-red-500"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/></svg
						>
					</button>
				</div>
			</div>

			<div class="flex flex-grow flex-col justify-between p-[18px]">
				<div>
					<p class="text-[11px] text-gray-500">Indonesia</p>
					<p class="mt-1 line-clamp-2 text-sm leading-snug font-medium text-gray-800">
						Jasa penyedia Tiket fast Boat/Ferry & Yacht Party di bali dibawah naungan P...
					</p>
				</div>
				<a
					href={resolve('/explore/agents')}
					class="text-sm font-semibold text-[#0084FF] transition-colors hover:text-blue-700"
					>See Details</a
				>
			</div>
		</div>

		<div
			class="flex h-[456px] w-[288px] shrink-0 flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					></div>
					<span class="text-sm font-semibold text-gray-800">PT. Bali...</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="rounded bg-[#A855F7] px-2 py-0.5 text-[10px] font-bold text-white"
						>Titanium</span
					>
					<div class="flex items-center gap-1 text-xs font-bold text-[#10B981]">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						5.0
					</div>
				</div>
			</div>
			<div class="relative shrink-0 px-[18px]">
				<div class="h-[200px] w-full overflow-hidden rounded-lg bg-gray-100">
					<img src="/img/1.jpg" alt="Agent Tour" class="h-full w-full object-cover" />
					<button
						type="button"
						aria-label="Save agent"
						class="absolute top-[10px] right-[28px] text-white/80 transition-colors hover:text-red-500"
					>
						<svg class="h-6 w-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/></svg
						>
					</button>
				</div>
			</div>
			<div class="flex flex-grow flex-col justify-between p-[18px]">
				<div>
					<p class="text-[11px] text-gray-500">-</p>
					<p class="mt-1 line-clamp-2 text-sm leading-snug font-medium text-gray-800">
						Bali is a popular island and tourist destination in the world. This island is...
					</p>
				</div>
				<a
					href={resolve('/explore/agents')}
					class="text-sm font-semibold text-[#0084FF] transition-colors hover:text-blue-700"
					>See Details</a
				>
			</div>
		</div>

		<div
			class="flex h-[456px] w-[288px] shrink-0 flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					></div>
					<span class="text-sm font-semibold text-gray-800">Bali Best...</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="rounded bg-[#A855F7] px-2 py-0.5 text-[10px] font-bold text-white"
						>Titanium</span
					>
					<div class="flex items-center gap-1 text-xs font-bold text-[#10B981]">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						5.0
					</div>
				</div>
			</div>
			<div class="relative shrink-0 px-[18px]">
				<div
					class="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100"
				>
					<svg class="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path></svg
					>
					<button
						type="button"
						aria-label="Save agent"
						class="absolute top-[10px] right-[28px] text-gray-400 transition-colors hover:text-red-500"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/></svg
						>
					</button>
				</div>
			</div>
			<div class="flex flex-grow flex-col justify-between p-[18px]">
				<div>
					<p class="text-[11px] text-gray-500">Indonesia</p>
					<p class="mt-1 line-clamp-2 text-sm leading-snug font-medium text-gray-800">
						With more than 30 years of experience, BBM Tours & Travel has proudly served...
					</p>
				</div>
				<a
					href={resolve('/explore/agents')}
					class="text-sm font-semibold text-[#0084FF] transition-colors hover:text-blue-700"
					>See Details</a
				>
			</div>
		</div>

		<div
			class="flex h-[456px] w-[288px] shrink-0 flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
		>
			<div class="flex h-[68px] shrink-0 items-center justify-between px-[18px]">
				<div class="flex items-center gap-[8px]">
					<div
						class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100"
					></div>
					<span class="text-sm font-semibold text-gray-800">Haji Darat</span>
				</div>
				<div class="flex items-center gap-2">
					<span class="rounded bg-[#A855F7] px-2 py-0.5 text-[10px] font-bold text-white"
						>Titanium</span
					>
					<div class="flex items-center gap-1 text-xs font-bold text-[#10B981]">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"
							><path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/></svg
						>
						5.0
					</div>
				</div>
			</div>
			<div class="relative shrink-0 px-[18px]">
				<div
					class="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100"
				>
					<svg class="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path></svg
					>
					<button
						type="button"
						aria-label="Save agent"
						class="absolute top-[10px] right-[28px] text-gray-400 transition-colors hover:text-red-500"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
							><path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/></svg
						>
					</button>
				</div>
			</div>
			<div class="flex flex-grow flex-col justify-between p-[18px]">
				<div>
					<p class="text-[11px] text-gray-500">-</p>
					<p class="mt-1 line-clamp-2 text-sm leading-snug font-medium text-gray-800">
						Hajidarat.com mempersembahkan pendaftaran haji domestik. Tim kami...
					</p>
				</div>
				<a
					href={resolve('/explore/agents')}
					class="text-sm font-semibold text-[#0084FF] transition-colors hover:text-blue-700"
					>See Details</a
				>
			</div>
		</div>
	</div>
</section>
