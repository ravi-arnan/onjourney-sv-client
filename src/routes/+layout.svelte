<script>
	import { page } from '$app/stores';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	import TopNavbar from '$lib/components/Home/TopNavbar.svelte';
	import Navbar from '$lib/components/Home/Navbar.svelte';
	import Footer from '$lib/components/Home/Footer.svelte';
	import BottomNav from '$lib/components/layout/BottomNav.svelte';

	let { children } = $props();

	// Sembunyikan navbar bawah di halaman tertentu
	let isTopNavHidden = $derived(
		$page.url.pathname.startsWith('/explore/packages') ||
			$page.url.pathname.startsWith('/explore/agents')
	);
	let isAuthPage = $derived(
		$page.url.pathname.startsWith('/auth/login') ||
			$page.url.pathname.startsWith('/auth/register') ||
			$page.url.pathname.startsWith('/auth/forgot-password')
	);
	let isBookingPage = $derived($page.url.pathname.startsWith('/booking'));
	let isTravelAgentPage = $derived($page.url.pathname.startsWith('/travel-agent/'));
	let showBottomNav = $derived(!isAuthPage && !isBookingPage && !isTravelAgentPage);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	{#if !isAuthPage && !isTravelAgentPage && !isBookingPage}
		<TopNavbar />
	{/if}

	{#if !isTopNavHidden && !isAuthPage && !isTravelAgentPage && !isBookingPage}
		<Navbar />
	{/if}

	<main class="flex-1">
		{@render children()}
	</main>

	{#if !isAuthPage && !isTravelAgentPage && !isBookingPage}
		<Footer />
	{/if}

	{#if showBottomNav}
		<BottomNav />
	{/if}
</div>
