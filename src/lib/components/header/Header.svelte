<script>
	import HeaderDesktop from './HeaderDesktop.svelte';
	import HeaderMobile from './HeaderMobile.svelte';
</script>

<header>
	<div class="desktop">
		<HeaderDesktop />
	</div>

	<div class="mobile">
		<HeaderMobile />
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
