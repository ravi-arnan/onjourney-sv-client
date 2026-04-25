<!-- ActivitySection.svelte -->
<section class="mb-12">
	<h3 class="mb-4 text-lg font-semibold text-gray-900">Activity</h3>

	<div class="flex items-center gap-6">
		<!-- Activity Card -->
		<div class="w-[200px] shrink-0">
			<!-- Image -->
			<div class="mb-3 h-[160px] w-full overflow-hidden rounded-[20px]">
				<img
					src="/img/3.jpg"
					alt="Chasing waterfalls and making memories in Bali 🌊🌴"
					class="h-full w-full object-cover"
				/>
			</div>

			<!-- Content -->
			<div>
				<p class="mb-1 text-[13px] text-slate-500">2025-08-08</p>
				<h4 class="mb-1 text-[15px] leading-snug font-semibold text-gray-900">
					Chasing waterfalls and making memories in Bali <span class="align-middle text-lg">🌊</span
					>
				</h4>
				<p class="mt-1 text-[13px] text-gray-500">Tegenungan gave us views and...</p>
			</div>
		</div>

		<!-- Arrow Button -->
		<button
			aria-label="Show more activities"
			class="ml-auto flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-50"
		>
			<svg width="16" height="16" viewBox="0 0 14 14" fill="none">
				<path
					d="M5 3l4 4-4 4"
					stroke="#4b5563"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</section>
