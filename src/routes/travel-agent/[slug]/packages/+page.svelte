<script>
	import PackagesContent from '$lib/components/packages/PackagesContent.svelte';

	let activeFilter = 'all';
	let visibleCount = 4;

	const packages = [
		{
			id: 1,
			title: 'Bali Tour Package 4 Days 3 Nights',
			image: '/img/pura.jpg',
			tags: ['Attractions', 'Foods', 'Hotels', 'Hidden destination'],
			price: 'Rp 3.499.000',
			duration: '3 Days',
			rating: 0,
			badge: 'Gold',
			type: 'non-seasonal',
			co2: '150.50 kg CO₂e'
		},
		{
			id: 2,
			title: 'Bali Holiday Tour Package 4D3N - Normal Season - Indian Market',
			image: '/img/market.jpg',
			tags: ['Attractions', 'Foods', 'Hotels'],
			price: 'Rp 650.000',
			duration: '4 Days',
			rating: 0,
			badge: 'Gold',
			type: 'seasonal',
			co2: '45.10 kg CO₂e'
		},
		{
			id: 3,
			title: 'Tour Package Muslim Friendly 4D3N Normal Season | Malaysia Market',
			image: '/img/water.jpg',
			tags: ['Attractions', 'Foods', 'Hotels'],
			price: 'Rp 3.499.000',
			duration: '4 Days',
			rating: 0,
			badge: 'Gold',
			type: 'seasonal',
			co2: '89.25 kg CO₂e'
		},
		{
			id: 4,
			title: 'Heaven Swing',
			image: '/img/ss.jpg',
			tags: [],
			price: 'Rp 485.000',
			duration: '1 Days',
			rating: 0,
			badge: 'Gold',
			noFacility: true,
			type: 'non-seasonal'
		},
		{
			id: 5,
			title: 'Snorkeling Trip Nusa Penida (Sharing)',
			image: '/img/scuba.jpg',
			tags: [],
			price: 'Rp 250.000',
			duration: '1 Days',
			rating: 0,
			badge: 'Gold',
			noFacility: true,
			type: 'non-seasonal'
		},
		{
			id: 6,
			title: 'ATV Kuber – Single Ride (1 Hour)',
			image: '/img/atv.jpg',
			tags: [],
			price: 'Rp 600.000',
			duration: '1 Days',
			rating: 0,
			badge: 'Gold',
			noFacility: true,
			type: 'non-seasonal'
		},
		{
			id: 7,
			title: 'Surya Bintang ATV Ride – Single (1 Hour)',
			image: '/img/trip.jpg',
			tags: [],
			price: 'Rp 600.000',
			duration: '1 Days',
			rating: 0,
			badge: 'Gold',
			noFacility: true,
			type: 'non-seasonal'
		},
		{
			id: 8,
			title: 'Surya Bintang ATV Ride – Tandem (1 Hour)',
			image: '/img/3.jpg',
			tags: [],
			price: 'Rp 950.000',
			duration: '1 Days',
			rating: 0,
			badge: 'Gold',
			noFacility: true,
			type: 'non-seasonal'
		}
	];

	$: filteredPackages = packages.filter((p) => {
		if (activeFilter === 'all') return true;
		if (activeFilter === 'seasonal') return p.type === 'seasonal';
		if (activeFilter === 'non-seasonal') return p.type === 'non-seasonal';
		return true;
	});

	$: displayedPackages = filteredPackages.slice(0, visibleCount);
	$: hasMore = visibleCount < filteredPackages.length;

	function handleFilterChange(filter) {
		activeFilter = filter;
		visibleCount = 4;
	}

	function loadMore() {
		visibleCount += 4;
	}
</script>

<PackagesContent
	{activeFilter}
	{displayedPackages}
	{hasMore}
	onFilterChange={handleFilterChange}
	onLoadMore={loadMore}
/>
