<script lang="ts">
  import Container from './Container.svelte';
  import NavItem from '$lib/components/ui/NavItem.svelte';
  import ExplorIcon from '$lib/components/icons/ExplorIcon.svelte';
  import AgentIcon from '$lib/components/icons/AgentIcon.svelte';
  import TripIcon from '$lib/components/icons/TripIcon.svelte';
  import TransportIcon from '$lib/components/icons/TransportIcon.svelte';
  import StoryIcon from '$lib/components/icons/StoryIcon.svelte';
</script>
<nav class="navbar">

  <!-- Judul hanya muncul di mobile -->
  <div class="mobile-title">
    Begin your journey
  </div>

  <Container>
    <div class="nav-inner">
      <NavItem href="/explore">
        <svelte:fragment slot="icon"><ExplorIcon /></svelte:fragment>
        Explore
      </NavItem>

      <NavItem href="/travel-agent">
        <svelte:fragment slot="icon"><AgentIcon /></svelte:fragment>
        Travel Agent
      </NavItem>

      <NavItem href="/trip">
        <svelte:fragment slot="icon"><TripIcon /></svelte:fragment>
        Personalized Trip
      </NavItem>

      <NavItem href="/transport">
        <svelte:fragment slot="icon"><TransportIcon /></svelte:fragment>
        Transport
      </NavItem>

      <NavItem href="/story">
        <svelte:fragment slot="icon"><StoryIcon /></svelte:fragment>
        Travel Story
      </NavItem>
    </div>
  </Container>
</nav>
<style>
.navbar {
  background: #fff;
}

.nav-inner {
  padding: 10px 8px;
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #e2e2e2;
  margin: 0 30px;
}

.mobile-title {
  display: none;
} 

@media (max-width: 768px) {

  .mobile-title {
    display: block;
    font-size: 18px;
    font-weight: 600;
    padding: 16px 16px 0 16px;
    color: #3f9ef0;
  }

  .nav-inner {
    margin: 0;                 /* hilangkan margin desktop */
    gap: 8px;
    overflow-x: auto;          /* aktifkan scroll horizontal */
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .nav-inner::-webkit-scrollbar {
    display: none;             /* sembunyikan scrollbar */
  }

  .nav-inner {
    scrollbar-width: none;     /* firefox */
  }

}
</style>