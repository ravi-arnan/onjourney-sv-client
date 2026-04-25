<script>
	import { MapPin, Layers, Map, ChevronDown } from 'lucide-svelte';
</script>

<section class="w-full border-b border-gray-100 bg-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
		<div class="flex items-center gap-8">
			<div
				class="flex cursor-pointer flex-col rounded-lg px-2 py-1 transition-colors hover:bg-gray-50"
			>
				<div class="flex items-center gap-1">
					<p class="text-sm font-semibold text-gray-800">Destination Name</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
					<MapPin class="h-4 w-4" />
					<input
						type="text"
						placeholder="Search destination name."
						class="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
					/>
				</div>
			</div>

			<div class="h-10 w-px bg-gray-200"></div>

			<div
				class="flex cursor-pointer flex-col rounded-lg px-2 py-1 transition-colors hover:bg-gray-50"
			>
				<div class="flex items-center gap-1">
					<p class="text-sm font-semibold text-gray-800">Choose Category</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
					<Layers class="h-4 w-4" />
					<span>Choose category.</span>
				</div>
			</div>

			<div class="h-10 w-px bg-gray-200"></div>

			<div
				class="flex cursor-pointer flex-col rounded-lg px-2 py-1 transition-colors hover:bg-gray-50"
			>
				<div class="flex items-center gap-1">
					<p class="text-sm font-semibold text-gray-800">Choose State</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-1 flex items-center gap-2 text-sm text-gray-400">
					<Map class="h-4 w-4" />
					<span>Choose State.</span>
				</div>
			</div>
		</div>

		<button
			class="rounded-lg bg-[#2F80ED] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#1c6ae4]"
		>
			Search Destination
		</button>
	</div>
</section>
