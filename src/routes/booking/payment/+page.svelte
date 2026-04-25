<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import StepLast from './StepLast.svelte';
	import PaymentMethod from './PaymentMethod.svelte';
	import OrderFinal from './OrderFinal.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import BackButton from '$lib/components/booking/BackButton.svelte';

	const bookingId = '996392464';
	const subtotalItems = [
		{ label: '2-Days Trip with Bali Enjoy Tour', amount: 453000 },
		{ label: 'Insurance A (x2)', amount: 286000 },
		{ label: 'Service Fee', amount: 0, free: true }
	];

	// State dari PaymentMethod di-bind ke sini
	let selectedPaymentType = 'full';
	let selectedFullMethod = 'bank_transfer';
	let selectedFullBank = 'bca';
	let selectedFullWallet = 'gopay';
	let selectedSplits = [];

	function handleProceed() {
		// Simpan state ke sessionStorage
		sessionStorage.setItem(
			'payment_data',
			JSON.stringify({
				paymentType: selectedPaymentType,
				method: selectedFullMethod,
				bank: selectedFullBank,
				wallet: selectedFullWallet,
				splits: selectedSplits, // sekarang sudah pakai .bank dan .wallet langsung
				bookingId,
				subtotalItems
			})
		);

		goto(resolve('/booking/summary'));
	}
</script>

<StepLast />

<div class="page">
	<Container>
		<div class="left">
			<BackButton to="/booking" />
			<PaymentMethod
				bind:selectedPaymentType
				bind:selectedFullMethod
				bind:selectedFullBank
				bind:selectedFullWallet
				bind:selectedSplits
			/>
		</div>
		<div class="right">
			<OrderFinal {bookingId} {subtotalItems} on:proceed={handleProceed} />
		</div>
	</Container>
</div>

<style>
	.page {
		margin: 32px auto;
		padding: 0 66px;
	}

	.page :global(.container) {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 40px;
		align-items: start;
	}

	@media (max-width: 768px) {
		.page {
			padding: 0 16px;
			margin: 16px auto;
		}
		.page :global(.container) {
			grid-template-columns: 1fr;
		}
	}
</style>
