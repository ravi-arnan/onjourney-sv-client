<script>
	import Container from '../layout/Container.svelte';
	import OnJourneyBrand from '$lib/components/brand/OnJourneyBrand.svelte';
	let { children } = $props();
</script>

<step class="header">
	<Container>
		<div class="header-inner">
			<OnJourneyBrand href="/dashboard" className="logo" />
		</div>
		{@render children?.()}
	</Container>
</step>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 66px;
		border-bottom: 1px solid #e2e2e2;
		background: #fff;
		position: sticky; /* ⬅️ ini kunci */
		top: 0; /* nempel di atas */
		z-index: 1000; /* biar tidak ketiban konten */
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		.header {
			padding: 0 16px;
			margin: 16px auto;
		}
	}
</style>
