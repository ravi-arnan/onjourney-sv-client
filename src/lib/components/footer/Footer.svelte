<script>
  import FooterDesktop from './FooterDesktop.svelte';
  import FooterMobile from './FooterMobile.svelte';
</script>

<header>
  <div class="desktop">
    <FooterDesktop />
  </div>

  <div class="mobile">
    <FooterMobile />
  </div>
</header>

<style>
  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
</style>