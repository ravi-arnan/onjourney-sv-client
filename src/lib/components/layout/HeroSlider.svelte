<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type Slide = {
    image: string;
    link: string;
  };

  const slides: Slide[] = [
    { image: '/src/lib/assets/banner/banner1.jpg', link: '/become-partner' },
    { image: '/src/lib/assets/banner/banner2.jpg', link: '/promo' },
    { image: '/src/lib/assets/banner/banner3.jpg', link: '/travel-agent' },
    { image: '/src/lib/assets/banner/banner4.jpg', link: '/story' }
  ];

  let current = 0;
  let direction: 'next' | 'prev' = 'next';
  let interval: ReturnType<typeof setInterval>;

  const next = () => {
    direction = 'next';
    current = (current + 1) % slides.length;
  };

  const prev = () => {
    direction = 'prev';
    current = (current - 1 + slides.length) % slides.length;
  };

  const goTo = (index: number) => {
    direction = index > current ? 'next' : 'prev';
    current = index;
  };

  onMount(() => {
    interval = setInterval(next, 10000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="slider">
{#each slides as slide, i}
  <a
    href={slide.link}
    class="slide
      {i === current ? 'active' : ''}
      {i === (direction === 'next'
        ? (current - 1 + slides.length) % slides.length
        : (current + 1) % slides.length)
        ? direction === 'next'
          ? 'exit-next'
          : 'exit-prev'
        : ''}"
    style="background-image: url('{slide.image}')"
    aria-label="Go to promotion page"
  ></a>
{/each}

  <!-- Arrow -->
  <button class="arrow left" on:click={prev} aria-label="Previous slide">
    ‹
  </button>

  <button class="arrow right" on:click={next} aria-label="Next slide">
    ›
  </button>

  <!-- Dots -->
  <div class="dots">
    {#each slides as _, i}
        <span
        role="button"
        tabindex="0"
        aria-label="Go to slide"
        class:active={i === current}
        on:click={() => goTo(i)}
        on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goTo(i);
            }
        }}
        ></span>
    {/each}
  </div>
</div>

<style>
  .slider {
    position: relative;
    height: 270px;
    border-radius: 16px;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transform: translateX(100%);
    transition: opacity 1s ease;
  }

  .slide.active {
    transform: translateX(0);
    z-index: 2;
  }

  .slide.exit-next {
    transform: translateX(-100%);
  }

  /* SLIDE KELUAR KE KANAN */
  .slide.exit-prev {
    transform: translateX(100%);
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.4);
    color: white;
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
    z-index: 2;
  }

  .arrow.left {
    left: 16px;
  }

  .arrow.right {
    right: 16px;
  }

  .dots {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 2;
  }

  .dots span {
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.6);
    border-radius: 50%;
    cursor: pointer;
  }

  .dots span.active {
    background: white;
    width: 10px;
    height: 10px;
  }

/* ===== MOBILE FIX ===== */
@media (max-width: 768px) {
  .slider {
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
  }

  .slide {
    background-size: cover;
    background-position: center center;
  }

  .arrow {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }

  .arrow.left {
    left: 8px;
  }

  .arrow.right {
    right: 8px;
  }

  .dots {
    bottom: 10px;
    gap: 6px;
  }

  .dots span {
    width: 6px;
    height: 6px;
  }

  .dots span.active {
    width: 8px;
    height: 8px;
  }
}
</style>