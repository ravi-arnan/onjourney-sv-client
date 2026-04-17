<script>
	import { writable } from 'svelte/store';
	import DescriptionSection from '$lib/components/DescriptionSection.svelte';
	import LanguageSection from '$lib/components/LanguageSection.svelte';
	import PackageList from '$lib/components/PackageList.svelte';
	import ActivitySection from '$lib/components/ActivitySection.svelte';
	import ReviewSection from '$lib/components/ReviewSection.svelte';

	let packages = writable([
		{
			id: 1,
			title: 'Bali Tour Package 4 Days 3 Nights',
			tags: 'Attractions, Foods, Hotels, Hidden destination',
			image: '/img/pura.jpg',
			price: 'Rp 3.499.000',
			days: '3 Days',
			rating: 0,
			liked: false,
			co2: '150.50 kg CO₂e'
		},
		{
			id: 2,
			title: 'Bali Holiday Tour Package 4D3N - Normal Season - Indian Market',
			image: '/img/2.jpg',
			tags: 'Attractions, Foods, Hotels',
			price: 'Rp 650.000',
			days: '4 Days',
			rating: 0,
			liked: false,
			co2: '45.10 kg CO₂e'
		},
		{
			id: 3,
			title: 'Bali Holiday Tour Package 4D3N - Normal Season - Indian Market',
			image: '/img/water.jpg',
			tags: 'Attractions, Foods, Hotels',
			price: 'Rp 650.000',
			days: '4 Days',
			rating: 0,
			liked: false,
			co2: '89.25 kg CO₂e'
		}
		
	]);

	function toggleLike(pkg) {
		packages.update((pkgs) => pkgs.map((p) => (p.id === pkg.id ? { ...p, liked: !p.liked } : p)));
	}
</script>

<div class="space-y-6">
	<DescriptionSection />
	<LanguageSection />
	<PackageList {packages} onToggleLike={toggleLike} />
	<ActivitySection />
	<ReviewSection />
</div>
