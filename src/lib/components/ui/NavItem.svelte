<script>
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	export let href = '';
</script>

<a href={resolve(href)} class="nav-item" class:active={$page.url.pathname === resolve(href)}>
	<slot name="icon" />
	<span><slot /></span>
</a>

<style>
	.nav-item {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 13px;
		text-decoration: none;
		color: #000000;
		font-weight: 500;
		font-size: 13px;
		border-bottom: none;
		white-space: nowrap;
	}

	.nav-item:hover {
		color: #3f9ef0;
	}

	.nav-item.active {
		color: #3f9ef0;
		border-bottom: 2px solid #3f9ef0;
	}

	/* ===== MOBILE MODE ===== */
	@media (max-width: 768px) {
		.nav-item {
			flex-direction: column;
			justify-content: center;
			min-width: 90px; /* penting agar bisa scroll */
			font-size: 12px;
		}
	}
</style>
