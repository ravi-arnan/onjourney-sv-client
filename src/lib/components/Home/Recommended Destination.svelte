<script>
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto w-[1200px] pt-[80px] pb-8 font-sans">
	<div class="mb-[32px] flex h-[32px] w-full items-center justify-between">
		<div class="flex items-center gap-[16px]">
			<h2 class="text-2xl font-semibold text-gray-900">Recommended Destination</h2>
			<svg class="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path>
			</svg>
		</div>
		<a
			href={resolve('/explore/destination')}
			class="text-sm font-medium text-gray-600 transition-colors hover:text-[#0084FF]">Show More</a
		>
	</div>

	<div class="grid w-[1200px] grid-cols-4 gap-[16px]">
		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="flex h-[112px] w-[112px] shrink-0 items-center justify-center bg-gray-50">
				<svg class="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path></svg
				>
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Air Terjun Pucuk
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Sambangan,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="flex h-[112px] w-[112px] shrink-0 items-center justify-center bg-gray-50">
				<svg class="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					></path></svg
				>
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Permandian Sungai Abasan
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Panji Anom,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img src="/img/babi.jpeg" alt="Tugu Bhuana Kerta" class="h-full w-full object-cover" />
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Tugu Bhuana Kerta
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Panji,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img src="/img/ss.jpg" alt="Hutan Raya Selat" class="h-full w-full object-cover" />
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Hutan Raya Selat
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Selat,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img src="/img/pura.jpg" alt="Air Terjun Kembar" class="h-full w-full object-cover" />
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Air Terjun Kembar
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Ambengan,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img
					src="/img/pesawat.jpg"
					alt="Air Terjun Aling-Aling"
					class="h-full w-full object-cover"
				/>
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Air Terjun Aling-Aling
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Sambangan,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img src="/img/pantai.jpg" alt="Krisna Adventure" class="h-full w-full object-cover" />
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Krisna Adventure
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Sambangan,...</p>
			</div>
		</div>

		<div
			class="flex h-[112px] w-[288px] overflow-hidden rounded-[15px] border border-gray-200 bg-white transition-shadow hover:shadow-md"
		>
			<div class="h-[112px] w-[112px] shrink-0 bg-gray-100">
				<img src="/img/nari.jpg" alt="Air Terjun Kroya" class="h-full w-full object-cover" />
			</div>
			<div class="flex w-[176px] flex-col justify-center gap-[4px] p-[18px]">
				<p class="truncate text-[11px] text-gray-500">Bali, Kabupaten...</p>
				<h3 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900">
					Air Terjun Kroya
				</h3>
				<p class="truncate text-[11px] text-gray-400">Desa Sambangan,...</p>
			</div>
		</div>
	</div>
</section>
