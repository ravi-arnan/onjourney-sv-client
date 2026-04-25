<script>
	import SearchIcon from '$lib/components/icons/SearchIcon.svelte';
</script>

<header class="mobile-header">
	<div class="search-box">
		<SearchIcon />
		<input placeholder="Search destination or travel agent..." />
	</div>

	<button class="notif">🔔</button>
</header>

<style>
	.mobile-header {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 20px;
		background: white;
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.search-box {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		background: #f4f6f8;
		padding: 16px 14px;
		border-radius: 999px;
	}

	input {
		border: none;
		background: transparent;
		outline: none;
		width: 100%;
		font-size: 14px;
	}

	.notif {
		border: none;
		background: transparent;
		font-size: 18px;
	}
</style>
