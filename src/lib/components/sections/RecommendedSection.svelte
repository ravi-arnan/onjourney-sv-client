<script lang="ts">
  import DestinationCard from '$lib/components/cards/DestinationCard.svelte';

  interface RecommendedItem {
    image: string;
    title: string;
    location: string;
    large?: boolean;
  }

  export let items: RecommendedItem[] = [];

  let container: HTMLDivElement;

  export const scrollLeft = () => container.scrollBy({ left: -260, behavior: 'smooth' });
  export const scrollRight = () => container.scrollBy({ left: 260, behavior: 'smooth' });
</script>

<div class="grid" bind:this={container}>
  {#each items as item}
    <DestinationCard
      image={item.image}
      title={item.title}
      location={item.location}
      large={item.large}
    />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    .grid {
      display: flex;
      gap: 12px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 4px 0;
    }

    .grid::-webkit-scrollbar {
      display: none;
    }

    .grid :global(.card) {
      min-width: 240px;
      flex-shrink: 0;
    }
  }
</style>