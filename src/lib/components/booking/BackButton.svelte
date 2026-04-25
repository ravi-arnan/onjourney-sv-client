<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	export let to: string;
	export let message: string =
		'Are you sure you want to go back? Your progress on this page may be lost.';

	function handleClick() {
		if (confirm(message)) goto(resolve(to));
	}
</script>

<button type="button" class="back-btn" on:click={handleClick}>
	<svg
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
	>
		<polyline points="15 18 9 12 15 6" />
	</svg>
	<span>Back</span>
</button>

<style>
	.back-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: none;
		border: none;
		padding: 8px 0;
		margin-bottom: 12px;
		color: #3f9ef0;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
	}
	.back-btn:hover {
		text-decoration: underline;
	}
	.back-btn:focus-visible {
		outline: 2px solid #3f9ef0;
		outline-offset: 2px;
		border-radius: 4px;
	}
</style>
