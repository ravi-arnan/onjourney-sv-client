<script lang="ts">
	import TourCard from '../cards/TourCard.svelte';
	interface TourItem {
		image: string;
		title: string;
		price: string;
		days: string;
		badge: string;
		logo: string;
		vendor: string;
		large?: boolean;
		href?: string;
	}

	export let items: TourItem[] = [];

	let container: HTMLDivElement;

	export const scrollLeft = () => container.scrollBy({ left: -270, behavior: 'smooth' });
	export const scrollRight = () => container.scrollBy({ left: 270, behavior: 'smooth' });
</script>

<div class="grid" bind:this={container}>
	{#each items as item (item.title + item.vendor)}
		<TourCard {...item} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

	/* ===== MOBILE ===== */
	@media (max-width: 768px) {
		.grid {
			display: flex;
			gap: 14px;
			overflow-x: auto;
			scroll-behavior: smooth;
			padding: 4px 0;
		}

		.grid::-webkit-scrollbar {
			display: none;
		}

		.grid :global(.tour) {
			width: 260px; /* sama untuk semua */
			min-width: 260px;
			max-width: 260px;
			flex-shrink: 0;
		}
	}
</style>
