<script>
	import { Archive, Calendar, Users, Layers, Menu, ChevronDown } from 'lucide-svelte';
</script>

<section class="w-full border-b border-gray-100 bg-white">
	<div class="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
		<div class="flex flex-1 items-center gap-0">
			<div class="group flex-1 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
				<div class="flex items-center gap-1">
					<p class="text-[13px] font-semibold text-gray-800">Package Name</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Archive class="h-4 w-4 text-gray-600" />
					<span class="truncate text-[13px] font-medium text-gray-900">All Packages Availa</span>
				</div>
			</div>

			<div class="mx-4 h-12 w-px bg-gray-200"></div>

			<div class="group flex-1 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
				<div class="flex items-center gap-1">
					<p class="text-[13px] font-semibold text-gray-800">Package Duration</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Calendar class="h-4 w-4 text-gray-600" />
					<span class="truncate text-[13px] font-medium text-gray-900">Flexible durati...</span>
				</div>
			</div>

			<div class="mx-4 h-12 w-px bg-gray-200"></div>

			<div class="group flex-1 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
				<div class="flex items-center gap-1">
					<p class="text-[13px] font-semibold text-gray-800">Total Guest</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Users class="h-4 w-4 text-gray-600" />
					<span class="truncate text-[13px] font-medium text-gray-900">Flexible total guest!</span>
				</div>
			</div>

			<div class="mx-4 h-12 w-px bg-gray-200"></div>

			<div class="group flex-1 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
				<div class="flex items-center gap-1">
					<p class="text-[13px] font-semibold text-gray-800">Choose Category</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Layers class="h-4 w-4 text-gray-600" />
					<span class="truncate text-[13px] font-medium text-gray-900">All Categories!</span>
				</div>
			</div>

			<div class="mx-4 h-12 w-px bg-gray-200"></div>

			<div class="group flex-1 cursor-pointer rounded-lg p-2 transition-colors hover:bg-gray-50">
				<div class="flex items-center gap-1">
					<p class="text-[13px] font-semibold text-gray-800">Type Package</p>
					<ChevronDown class="h-3 w-3 text-gray-400" />
				</div>
				<div class="mt-2 flex items-center gap-2">
					<Menu class="h-4 w-4 text-gray-600" />
					<span class="truncate text-[13px] font-medium text-gray-400">Choose Type of Pac</span>
				</div>
			</div>
		</div>

		<button
			class="ml-6 rounded-lg bg-[#2FA1FF] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1a8fff] active:scale-95"
		>
			Search Package
		</button>
	</div>
</section>
