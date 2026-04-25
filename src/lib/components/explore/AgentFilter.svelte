<script>
	import { BriefcaseBusiness, Globe, Flag } from 'lucide-svelte';
</script>

<section class="w-full border-b border-gray-100 bg-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-10 py-6">
		<div class="flex items-center gap-14">
			<div class="min-w-[220px]">
				<p class="text-sm font-semibold text-gray-800">Travel Agent Name</p>
				<div class="mt-2 flex items-center gap-2 text-sm text-gray-700">
					<BriefcaseBusiness class="h-4 w-4 text-gray-700" />
					<span>All agent available!</span>
				</div>
			</div>

			<div class="h-14 w-px bg-gray-200"></div>

			<div class="min-w-[200px]">
				<p class="text-sm font-semibold text-gray-800">Choose Language</p>
				<div class="mt-2 flex items-center gap-2 text-sm text-gray-700">
					<Globe class="h-4 w-4 text-gray-700" />
					<span>All Languages!</span>
				</div>
			</div>

			<div class="h-14 w-px bg-gray-100"></div>

			<div class="min-w-[200px]">
				<p class="text-sm font-semibold text-gray-800">Choose Country</p>
				<div class="mt-2 flex items-center gap-2 text-sm text-gray-700">
					<Flag class="h-4 w-4 text-gray-700" />
					<span>All Countries!</span>
				</div>
			</div>
		</div>
		<div class="h-14 w-px bg-gray-200"></div>

		<button
			class="rounded-xl bg-[#2F80ED] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#1c6ae4]"
		>
			Search Agent
		</button>
	</div>
</section>
