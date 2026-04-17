<!-- Sidebar.svelte -->
<script>
	let { experiences } = $props();

	const defaultExperiences = [
		{
			day: 1,
			time: '06:00',
			name: 'Jatiluwih Rice Terace',
			img: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=80&q=80'
		},
		{
			day: 1,
			time: '10:00',
			name: 'Nusa Penida',
			img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=80&q=80'
		},
		{
			day: 2,
			time: '06:00',
			name: 'Aling-aling Waterfall',
			img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=80&q=80'
		},
		{
			day: 2,
			time: '15:00',
			name: 'Ubud Monkey Forest',
			img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e'
		}
	];

	const items = $derived(experiences ?? defaultExperiences);
</script>

<aside class="w-full">
	<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-24">
		<!-- Experiences Header -->
		<div class="border-b border-gray-50 px-4 pt-4 pb-3">
			<div class="flex items-center justify-between">
				<span class="text-sm font-bold text-gray-900">4 Experiences / 2 days</span>
				<div class="flex items-center gap-1 text-xs text-gray-500">
					<svg
						class="h-3.5 w-3.5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
					2 person
				</div>
			</div>
		</div>

		<!-- Experiences List -->
		<div class="px-4 pt-4 pb-2">
			{#each items as exp, i (`${exp.name}-${i}`)}
				<div class="relative flex items-center gap-3 pb-4">

					<!-- Left column: dashed line + badge -->
					<div class="relative flex flex-col items-center h-10" style="width: 20px; flex-shrink: 0;">
						<div class="absolute flex h-5 w-5 items-center justify-center rounded-full border border-[#90c4f8] bg-[#e8f4fe] text-[10px] font-bold text-[#2097f5] z-10"
							style="top: 50%; transform: translateY(-50%);">
							{i + 1}
						</div>
						{#if i < items.length - 1}
							<!-- Dashed line connecting badges -->
							<div class="dashed-line absolute left-1/2 -translate-x-1/2 z-0" style="top: 50%; bottom: -30px; width: 2px;"></div>
						{/if}
					</div>

					<!-- Thumbnail + text -->
					<div class="flex items-center gap-3">
						<img src={exp.img} alt={exp.name} class="h-[42px] w-[42px] shrink-0 rounded-[10px] object-cover" />
						<div>
							<div class="mb-0.5 text-[10px] text-gray-500 font-medium">Day {exp.day} • {exp.time}</div>
							<a
								href={`/experience/${exp.name.toLowerCase().replace(/\s+/g, '-')}`}
								class="text-xs font-semibold leading-tight text-gray-900 underline underline-offset-2 transition-colors hover:text-[#2097f5]"
							>{exp.name}</a>
						</div>
					</div>

				</div>
			{/each}
		</div>

		<div class="mx-4 border-t border-gray-100"></div>

		<!-- Date Picker -->
		<div class="px-4 py-3">
			<p class="mb-2 text-xs font-medium text-gray-500">Check Available Travel Date</p>
			<div class="flex items-center gap-2 rounded-sm border border-gray-200 bg-white px-3 py-2">
				<svg
					class="h-3.5 w-3.5 shrink-0 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
					/>
				</svg>
				<span class="text-xs text-gray-600">11 March - 12 March 2025</span>
			</div>
			<div class="mt-2 flex items-center gap-1">
				<svg class="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="text-xs font-medium text-green-600">This date is available</span>
			</div>
		</div>

		<div class="mx-4 border-t border-gray-100"></div>

		<!-- Price + Buttons -->
		<div class="px-4 py-4">
			<div class="mb-4 flex items-center justify-between">
				<span class="text-[13px] font-medium text-gray-600">Total price for 2 person</span>
				<div class="text-[22px] font-normal text-[#2097f5]">Rp 443,000</div>
			</div>
			<button
				class="mb-3 w-full rounded-full border border-[#d2e8fb] py-2.5 text-sm font-semibold text-[#2097f5] transition-colors hover:bg-blue-50"
			>
				Add to Cart
			</button>
			<button
				class="mb-3 w-full rounded-full bg-[#2097f5] py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-600"
			>
				Book Now
			</button>
			<div class="mb-3 text-center text-xs font-medium text-gray-800">or</div>
			<button
				class="mb-4 flex w-full flex-col items-center justify-center rounded-full border border-[#d2e8fb] bg-white py-2 shadow-sm transition-colors hover:bg-blue-50"
			>
				<div class="text-sm font-medium leading-tight text-[#2097f5]">Reserve with Deposit</div>
				<div class="mt-0.5 text-[11px] leading-tight text-[#5cb0f6]">(Pay Rp 150,000 now)</div>
			</button>
			<div class="text-[11px] leading-relaxed text-gray-400">
				Pay a small deposit today to secure your booking. Deposit is non-refundable as it covers partner fees.
			</div>
		</div>
	</div>
</aside>

<style>
	.dashed-line {
		width: 2px;
		background-image: repeating-linear-gradient(
			to bottom,
			#b8d8f8 0px,
			#b8d8f8 5px,
			transparent 5px,
			transparent 10px
		);
	}
</style>
