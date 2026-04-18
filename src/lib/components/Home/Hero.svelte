<script>
	import { resolve } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';

	const images = [
		'/img/pesawat.jpg',
		'/img/pura.jpg',
		'/img/ss.jpg',
		'/img/pantai.jpg',
		'/img/nari.jpg',
		'/img/banana.jpg'
	];

	let current = 0;
	let interval;
	let isDragging = false;
	let startX = 0;
	let dragThreshold = 50;

	function next() {
		current = (current + 1) % images.length;
	}

	function prev() {
		current = (current - 1 + images.length) % images.length;
	}

	function goTo(index) {
		current = index;
	}

	function startAutoPlay() {
		interval = setInterval(next, 3000);
	}

	function stopAutoPlay() {
		clearInterval(interval);
	}

	// Mouse drag
	function onMouseDown(e) {
		isDragging = true;
		startX = e.clientX;
		stopAutoPlay();
	}

	function onMouseUp(e) {
		if (!isDragging) return;
		isDragging = false;
		const diff = startX - e.clientX;
		if (Math.abs(diff) > dragThreshold) {
			if (diff > 0) next();
			else prev();
		}
		startAutoPlay();
	}

	function onMouseLeave() {
		if (isDragging) {
			isDragging = false;
			startAutoPlay();
		}
	}

	// Touch swipe
	function onTouchStart(e) {
		startX = e.touches[0].clientX;
		stopAutoPlay();
	}

	function onTouchEnd(e) {
		const diff = startX - e.changedTouches[0].clientX;
		if (Math.abs(diff) > dragThreshold) {
			if (diff > 0) next();
			else prev();
		}
		startAutoPlay();
	}

	onMount(() => startAutoPlay());
	onDestroy(() => stopAutoPlay());
</script>

<section class="mx-auto max-w-[1200px] px-6 py-8 font-sans">
	<div class="relative mb-10 w-full">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				></path>
			</svg>
		</div>
		<input
			type="text"
			class="w-full rounded-md border border-gray-300 py-3 pr-4 pl-12 text-sm text-gray-800 placeholder-gray-400 transition-all outline-none focus:border-[#0084FF] focus:ring-1 focus:ring-[#0084FF]"
			placeholder="Search destination or activities"
		/>
	</div>

	<h2 class="mb-5 text-2xl font-bold text-gray-900">Offers For You</h2>

	<!-- Carousel drag surface: mouse/touch handlers are intentional. -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="group relative w-full cursor-grab overflow-hidden rounded-xl bg-gray-100 shadow-sm select-none active:cursor-grabbing"
		on:mousedown={onMouseDown}
		on:mouseup={onMouseUp}
		on:mouseleave={onMouseLeave}
		on:touchstart={onTouchStart}
		on:touchend={onTouchEnd}
		role="region"
		aria-label="Image carousel"
	>
		<!-- Images -->
		{#each images as img, i (img)}
			<img
				src={resolve(img)}
				alt="Offer {i + 1}"
				draggable="false"
				on:dragstart|preventDefault
				class="aspect-[3/1] h-auto w-full object-cover transition-opacity duration-500 md:aspect-[4/1] {i ===
				current
					? 'opacity-100'
					: 'absolute inset-0 opacity-0'}"
			/>
		{/each}

		<!-- Prev Button -->
		<button
			type="button"
			aria-label="Previous offer"
			class="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-[#0084FF] transition-colors hover:bg-white/80"
			on:click|stopPropagation={prev}
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"
				></path>
			</svg>
		</button>

		<!-- Next Button -->
		<button
			type="button"
			aria-label="Next offer"
			class="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/30 text-[#0084FF] transition-colors hover:bg-white/80"
			on:click|stopPropagation={next}
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"
				></path>
			</svg>
		</button>

		<!-- Dots -->
		<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
			{#each [...images.keys()] as i (i)}
				<button
					type="button"
					aria-label="Go to offer {i + 1}"
					class="rounded-full transition-all duration-300 {i === current
						? 'h-2.5 w-2.5 bg-[#0084FF]'
						: 'h-2 w-2 bg-white opacity-60 hover:opacity-100'}"
					on:click|stopPropagation={() => goTo(i)}
				></button>
			{/each}
		</div>
	</div>
</section>
