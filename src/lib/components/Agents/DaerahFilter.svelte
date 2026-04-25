<script>
	import { onMount } from 'svelte';

	let scrollContainer;
	let showLeft = false;
	let showRight = true;

	let regions = [
		'All',
		'Bali',
		'Jawa Barat',
		'Jakarta',
		'Yogyakarta',
		'Nusa Tenggara',
		'Sulawesi Tengah',
		'Sumatera',
		'Papua',
		'Kalimantan'
	];

	let selectedRegion = 'All'; // ✅ default aktif

	function selectRegion(region) {
		selectedRegion = region;
	}

	function updateArrows() {
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

		showLeft = scrollLeft > 0;
		showRight = scrollLeft + clientWidth < scrollWidth - 5;
	}

	function scrollRight() {
		scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
	}

	function scrollLeft() {
		scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
	}

	onMount(() => {
		updateArrows();
	});
</script>

<section class="w-full bg-white">
	<div class="relative mx-auto max-w-7xl px-8 py-6">
		{#if showLeft}
			<button
				on:click={scrollLeft}
				class="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
			>
				‹
			</button>
		{/if}

		<div
			bind:this={scrollContainer}
			on:scroll={updateArrows}
			class="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-10"
		>
			{#each regions as region (region)}
				<button
					on:click={() => selectRegion(region)}
					class={selectedRegion === region
						? 'rounded-full bg-black px-6 py-2 text-sm font-medium whitespace-nowrap text-white'
						: 'rounded-full border border-gray-300 px-6 py-2 text-sm font-medium whitespace-nowrap transition hover:bg-gray-100'}
				>
					{region}
				</button>
			{/each}
		</div>

		{#if showRight}
			<button
				on:click={scrollRight}
				class="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
			>
				›
			</button>
		{/if}
	</div>
</section>
