<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import SidebarAgent from '$lib/components/SidebarAgent.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	const slug = $derived($page.params.slug);
	const isDetailPage = $derived(
		$page.url.pathname.includes('/detailpackages/') || $page.url.pathname.includes('/detail/')
	);
</script>

<div class="flex min-h-screen flex-col bg-white">
	<Navbar />

	<main class="mx-auto w-full max-w-[1200px] flex-1 px-4 md:px-8">
		{#if isDetailPage}
			<!-- Detail Page Layout: No Sidebar, No Tabs from this layout -->
			<div class="mt-4">
				{@render children()}
			</div>
		{:else}
			<!-- Main Layout: Sidebar + Tabs -->
			<div class="agent-layout mt-8 mb-16">
				<aside class="agent-sidebar w-full">
					<SidebarAgent />
				</aside>

				<section class="agent-content min-w-0">
					<Tabs {slug} />

					<div class="mt-4">
						{@render children()}
					</div>
				</section>
			</div>
		{/if}
	</main>

	<Footer />
</div>

<style>
	.agent-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 920px) {
		.agent-layout {
			grid-template-columns: minmax(280px, 320px) minmax(0, 1fr);
			gap: 2rem;
			align-items: start;
		}
	}
</style>
