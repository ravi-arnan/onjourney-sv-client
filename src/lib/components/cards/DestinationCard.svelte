<script>
	import { resolve } from '$app/paths';

	export let image = '';
	export let title = '';
	export let location = '';
	export let large = false;
</script>

<a href={resolve(`/destination/${title}`)} class="card {large ? 'large' : ''}">
	<div class="image">
		{#if image}
			<img src={image} alt={title} />
		{:else}
			<div class="placeholder">🖼️</div>
		{/if}
	</div>

	<div class="content">
		<small>{location}</small>
		<h4>{title}</h4>
	</div>
</a>

<style>
	.card {
		display: flex;
		gap: 12px;
		padding: 12px;
		border: 1px solid #e6e6e6;
		border-radius: 12px;
		background: white;
		text-decoration: none;
		color: inherit;
	}

	.card.large {
		grid-column: span 2;
	}

	.image img {
		width: 72px;
		height: 72px;
		border-radius: 8px;
		object-fit: cover;
	}

	.placeholder {
		width: 72px;
		height: 72px;
		border-radius: 8px;
		background: #f1f1f1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	small {
		color: #666;
	}

	h4 {
		font-size: 14px;
		margin: 4px 0 0;
	}
</style>
