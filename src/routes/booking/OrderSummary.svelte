<script lang="ts">
	import { resolve } from '$app/paths';

	interface SubtotalItem {
		label: string;
		amount: number;
		free?: boolean;
	}

	interface Props {
		bookingId?: string;
		subtotalItems?: SubtotalItem[];
		ctaHref?: string;
	}

	let { bookingId = '', subtotalItems = [], ctaHref = '/booking/payment' }: Props = $props();

	let total = $derived(subtotalItems.reduce((s, i) => s + i.amount, 0));

	const formatRp = (n: number) => {
		if (n === 0) return 'FREE';
		const abs = Math.abs(n);
		const str = 'Rp ' + abs.toLocaleString('id-ID');
		return n < 0 ? '-' + str : str;
	};
</script>

<div class="order-card">
	<!-- Booking ID -->
	<div class="booking-id-block">
		<p class="order-label">Booking ID</p>
		<p class="booking-id">{bookingId}</p>
	</div>

	<hr class="divider" />

	<!-- Subtotal -->
	<p class="order-label">Subtotal</p>
	<div class="subtotal-list">
		{#each subtotalItems as item (`${item.label}-${item.amount}`)}
			<div class="subtotal-row">
				<span class="subtotal-name">{item.label}</span>
				<span class="subtotal-amount" class:free={item.free} class:discount={item.amount < 0}>
					{formatRp(item.amount)}
				</span>
			</div>
		{/each}
	</div>

	<hr class="divider" />

	<!-- Total -->
	<div class="total-row">
		<span class="total-label">Total</span>
		<span class="total-amount">Rp {total.toLocaleString('id-ID')}</span>
	</div>

	<!-- CTA -->
	<!-- eslint-disable-next-line @typescript-eslint/no-explicit-any -->
	<a href={resolve(ctaHref as any)} class="cta-btn">Continue Payment</a>
</div>

<style>
	.order-card {
		background: #fff;
		border-radius: 12px;
		padding: 24px;
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
		position: sticky;
		top: 20px;
	}

	.order-label {
		font-size: 20px;
		font-weight: 600;
		color: #1a1a1a;
		margin: 0 0 6px 0;
	}

	.booking-id-block {
		margin-bottom: 4px;
	}

	.booking-id {
		font-size: 14px;
		color: #3f9ef0;
		font-weight: 500;
		margin: 0;
	}

	.divider {
		border: none;
		border-top: 1px solid #f0f0f0;
		margin: 16px 0;
	}

	.subtotal-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 12px;
	}

	.subtotal-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 8px;
	}

	.subtotal-name {
		font-size: 13px;
		color: #000000;
		flex: 1;
		line-height: 1.4;
	}

	.subtotal-amount {
		font-size: 13px;
		color: #aaa;
		font-weight: 300;
		white-space: nowrap;
	}

	.subtotal-amount.free {
		color: #aaa;
	}
	.subtotal-amount.discount {
		color: #e74c3c;
	}

	.total-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30px;
		margin-top: 20px;
	}

	.total-label {
		font-size: 15px;
		font-weight: 400;
		color: #1a1a1a;
	}

	.total-amount {
		font-size: 22px;
		font-weight: 500;
		color: #3f9ef0;
	}

	.cta-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 14px;
		background: #3f9ef0;
		color: #fff;
		border: none;
		border-radius: 50px;
		font-size: 15px;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.2s;
		text-decoration: none;
	}

	.cta-btn:hover {
		background: #2d8de0;
	}

	@media (max-width: 768px) {
		.order-card {
			position: static;
		}
	}
</style>
