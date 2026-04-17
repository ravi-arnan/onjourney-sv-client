<script>
  import LanguageDropdown from '$lib/components/ui/LanguageDropdown.svelte';
  import Container from '../layout/Container.svelte';
  import OnJourneyBrand from '$lib/components/brand/OnJourneyBrand.svelte';
  let { children } = $props();
</script>

<header class="header">
  <Container>
    <div class="header-inner">
      <OnJourneyBrand href="/dashboard" className="logo" />

      <!-- Right -->
      <div class="right">
        <a href="/login" class="language">Join as Travel Agent</a>
        <LanguageDropdown />
        <a href="/login" class="login">Login</a>
        <a href="/register" class="signup">Sign Up</a>
      </div>
    </div>
    {@render children?.()}
  </Container>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 66px;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;
  }
  
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .right {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 550;
    gap: 26px;
  }

  .language {
    background: #fff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }

  .login {
    color: #3f9ef0;
    text-decoration: none;
    cursor: pointer;
  }

  .signup {
    background: #3f9ef0;
    color: #fff;
    border: none;
    padding: 11px 24px;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
  }
</style>