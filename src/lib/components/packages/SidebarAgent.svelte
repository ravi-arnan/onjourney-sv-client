<!-- SidebarAgent.svelte -->
<aside class="w-full shrink-0 lg:w-55">
	<div class="sticky top-24 rounded-xl border border-gray-200 bg-white p-5">
		<!-- Avatar -->
		<div class="mb-4 flex justify-center">
			<div
				class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-200 bg-linear-to-br from-yellow-200 to-orange-300 text-2xl shadow-sm"
			>
				🌸
			</div>
		</div>

		<!-- Name -->
		<div class="mb-1 flex items-center justify-center gap-1.5">
			<p class="text-center text-[13px] leading-tight font-bold text-gray-800">
				PT. Bali Sundaram Travel
			</p>
			<svg class="h-4 w-4 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
				<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</div>

		<!-- Joined -->
		<p class="mb-4 text-center text-[11px] text-gray-400">Joined in July 2025</p>

		<!-- Stats -->
		<div class="mb-4 flex gap-2">
			<div class="flex flex-1 items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-2">
				<svg class="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
				<span class="text-xs font-bold text-gray-700">5.0</span>
			</div>
			<div class="flex flex-1 items-center gap-1 rounded-lg border border-gray-200 px-2 py-2">
				<span class="text-[11px] font-semibold whitespace-nowrap text-gray-700">15 Packages</span>
			</div>
		</div>

		<!-- Reviews -->
		<div class="mb-2 flex items-center gap-2">
			<svg class="h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
				/>
			</svg>
			<span class="text-xs text-gray-500">0 Reviews</span>
		</div>

		<!-- Globe -->
		<div class="mb-4 flex items-center gap-2">
			<svg class="h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>

		<hr class="mb-3 border-gray-100" />
		<button class="text-xs text-blue-500 transition-colors hover:underline"
			>Report this agent</button
		>
	</div>
</aside>
