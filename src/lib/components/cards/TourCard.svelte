<script lang="ts">
	import { resolve } from '$app/paths';

	export let image = '';
	export let title = '';
	export let price = '';
	export let days = '';
	export let badge = '';
	export let logo = '';
	export let vendor = '';
	export let level = 'Gold';
</script>

<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
<a href={resolve(`/tour/${title}` as any)} class="tour">
	<!-- HEADER -->
	<div class="header">
		<div class="vendor">
			{#if logo}
				<img src={logo} alt={vendor} />
			{/if}
			<span>{vendor}</span>
		</div>
		<span class="level">{level}</span>
	</div>

	<!-- IMAGE -->
	<div class="thumb">
		{#if badge}
			<span class="badge">{badge}</span>
		{/if}
		<button class="fav">♡</button>
		<img src={image} alt={title} />
	</div>

	<!-- BODY -->
	<div class="body">
		<h4>{title}</h4>
		<p class="desc">No facility provided.</p>

		<div class="rating">
			⭐ <span>0</span>
		</div>

		<div class="bottom">
			<span class="price">{price}</span>
			<span class="days">{days}</span>
		</div>
	</div>
</a>

<style>
	.tour {
		display: block;
		border-radius: 16px;
		overflow: hidden;
		background: #fff;
		border: 1px solid #eee;
		text-decoration: none;
		color: inherit;
	}

	/* HEADER */
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px;
	}

	.vendor {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 600;
		font-size: 12px;
	}

	.vendor img {
		width: 26px;
		height: 26px;
		border-radius: 50%;
	}

	.level {
		background: #ffc107;
		color: #000;
		font-size: 12px;
		padding: 4px 10px;
		border-radius: 999px;
		font-weight: 600;
	}

	/* IMAGE */
	.thumb {
		position: relative;
	}

	.thumb img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.badge {
		position: absolute;
		top: 12px;
		left: 12px;
		background: #1e88e5;
		color: white;
		font-size: 12px;
		padding: 4px 10px;
		border-radius: 999px;
		z-index: 2;
	}

	.fav {
		position: absolute;
		top: 12px;
		right: 12px;
		background: rgba(0, 0, 0, 0.4);
		color: white;
		border: none;
		width: 34px;
		height: 34px;
		border-radius: 50%;
		font-size: 18px;
		cursor: pointer;
	}

	/* BODY */
	.body {
		padding: 14px;
		font-size: 12px;
	}

	.body h4 {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 6px;
		line-height: 1.3;
	}

	.desc {
		font-size: 13px;
		color: #777;
		margin-bottom: 8px;
	}

	.rating {
		font-size: 14px;
		color: #f5b400;
		margin-bottom: 10px;
	}

	/* BOTTOM */
	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.price {
		color: #1e88e5;
		font-weight: 700;
		font-size: 18px;
	}

	.days {
		font-size: 13px;
		color: #555;
	}
</style>
