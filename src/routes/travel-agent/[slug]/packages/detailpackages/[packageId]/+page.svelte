<script>
	import { page } from '$app/stores';
	import Breadcrumb from '$lib/components/detailpackages/Breadcrumb.svelte';
	import HeroSection from '$lib/components/detailpackages/HeroSection.svelte';
	import Facilities from '$lib/components/detailpackages/Facilities.svelte';
	import Sidebar from '$lib/components/detailpackages/Sidebar.svelte';
	import PackageDescription from '$lib/components/detailpackages/PackageDescription.svelte';
	import Categories from '$lib/components/detailpackages/Categories.svelte';
	import DestinationMap from '$lib/components/detailpackages/DestinationMap.svelte';
	import SimilarPackages from '$lib/components/detailpackages/SimilarPackages.svelte';

	const slug = $derived($page.params.slug);
	const packageId = $derived($page.params.packageId);

	let isSaved = $state(false);
	function handleSaveToggle() {
		isSaved = !isSaved;
	}
</script>

<div class="min-h-screen bg-white" data-slug={slug} data-package-id={packageId}>
	<main class="mx-auto max-w-6xl px-6 pt-4">
		<Breadcrumb />

		<!-- Title Section -->
		<div class="mt-2 mb-4">
			<h1 class="mb-2 text-[26px] font-bold tracking-tight text-gray-900">East Bali Tour</h1>
			<div class="flex flex-wrap items-center gap-2">
				<div class="flex items-center gap-1.5 text-orange-400">
					<svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
					<span class="text-sm font-semibold">4.5</span>
				</div>
				<span class="mr-2 text-sm text-gray-400">(100)</span>
				<span class="rounded bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white"
					>Package Available</span
				>
				<span class="rounded bg-[#2097f5] px-2 py-0.5 text-[10px] font-bold text-white"
					>Reservation with Deposit Available</span
				>
			</div>
		</div>

		<div class="mt-6 flex flex-col gap-8 lg:flex-row">
			<!-- Main Content (Left) -->
			<div class="flex-1">
				<HeroSection {isSaved} onSaveToggle={handleSaveToggle} />

				<Facilities />

				<PackageDescription />

				<Categories />

				<DestinationMap />

				<SimilarPackages />
			</div>

			<!-- Sidebar (Right) -->
			<div class="lg:w-[300px]">
				<Sidebar />
			</div>
		</div>
	</main>
</div>
