<script>
	import { resolve } from '$app/paths';

	let activeTab = 'Packages';

	function selectTab(tab) {
		activeTab = tab;
	}
</script>

<section class="min-h-screen bg-gray-100">
	<div class="mx-auto max-w-7xl px-10 py-12">
		<div class="grid grid-cols-3 gap-16">
			<!-- LEFT -->
			<div class="col-span-2">
				<h1 class="mb-8 text-4xl font-semibold text-gray-900">Saved</h1>

				<!-- TAB -->
				<div class="flex gap-10 border-b border-gray-300 text-[15px]">
					<button
						on:click={() => selectTab('Packages')}
						class={`pb-3 ${
							activeTab === 'Packages'
								? 'border-b-2 border-blue-500 text-blue-500'
								: 'text-gray-700'
						}`}
					>
						Packages
					</button>

					<button
						on:click={() => selectTab('Destinations')}
						class={`pb-3 ${
							activeTab === 'Destinations'
								? 'border-b-2 border-blue-500 text-blue-500'
								: 'text-gray-700'
						}`}
					>
						Destinations
					</button>

					<button
						on:click={() => selectTab('Agents')}
						class={`pb-3 ${
							activeTab === 'Agents' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'
						}`}
					>
						Agents
					</button>
				</div>

				<!-- CONTENT -->
				<div class="mt-10">
					<h2 class="mb-2 text-lg font-semibold text-gray-900">Login to view your saved list</h2>

					<p class="mb-6 text-gray-600">You can create, view, or edit once you’ve logged in.</p>

					<a
						href={resolve('/auth/login')}
						class="rounded-md bg-[#0084FF] px-6 py-2 whitespace-nowrap text-white transition-colors hover:bg-blue-600"
						>Log In</a
					>
				</div>
			</div>

			<!-- RIGHT -->
			<div class="flex justify-end">
				<div class="w-[360px] rounded-2xl border border-gray-200 bg-white p-8">
					<div
						class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl"
					>
						📍
					</div>

					<h3 class="mb-3 text-lg leading-snug font-semibold text-gray-900">
						Let's explore and add your saved package or destination!
					</h3>

					<p class="mb-6 text-sm leading-relaxed text-gray-600">
						There are so many unique packages and destinations out there! Come explore to find
						hidden gem destinations and packages for your vacation with friends or family.
					</p>

					<a
						href={resolve('/explore/packages')}
						class="rounded-md bg-[#0084FF] px-6 py-2 whitespace-nowrap text-white transition-colors hover:bg-blue-600"
					>
						Explore Now
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
