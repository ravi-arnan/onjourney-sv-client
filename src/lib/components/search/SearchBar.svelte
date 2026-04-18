<script>
	import SearchBarDesktop from './SearchBarDesktop.svelte';
	import SearchBarMobile from './SearchBarMobile.svelte';
</script>

<header>
	<div class="desktop">
		<SearchBarDesktop />
	</div>

	<div class="mobile">
		<SearchBarMobile />
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
