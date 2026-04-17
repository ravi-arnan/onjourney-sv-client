<script>
  import BottomNav from '$lib/components/layout/BottomNav.svelte';
  import Footer from '$lib/components/booking/Footer.svelte';
  import Header from '$lib/components/booking/Header.svelte';
</script>

<div class="top">
    <Header />
</div>

<main class="content">
    <slot />
</main>

<BottomNav />
<Footer />

<style>
  /* .content {
    padding: 16px 64px; 
  } */

  .top{
    position: sticky;  /* ⬅️ ini kunci */
    top: 0;            /* nempel di atas */
    z-index: 1000;     /* biar tidak ketiban konten */  
  }

  /* @media (max-width: 1024px) {
    .content {
      padding: 16px 32px;
    }
  } */

  /* ===================== */
  /* MOBILE */
  @media (max-width: 768px) {
    .content {
      padding: 16px 16px;
    }
  }
</style>