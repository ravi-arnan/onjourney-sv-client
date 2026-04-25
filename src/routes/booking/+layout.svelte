<script>
	import BottomNav from '$lib/components/layout/BottomNav.svelte';
	import Footer from '$lib/components/booking/Footer.svelte';
	import Header from '$lib/components/booking/Header.svelte';
</script>

<div class="layout">
	<div class="top">
		<Header />
	</div>

	<main class="content">
		<slot />
	</main>

	<BottomNav />
	<Footer />
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.top {
		position: sticky; /* ⬅️ ini kunci */
		top: 0; /* nempel di atas */
		z-index: 1000; /* biar tidak ketiban konten */
	}

	.content {
		flex: 1 0 auto; /* grow to push footer to bottom on short pages */
	}

	/* ===================== */
	/* MOBILE */
	@media (max-width: 768px) {
		.content {
			padding: 16px 16px;
		}
	}
</style>
