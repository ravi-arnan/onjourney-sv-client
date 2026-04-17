<script lang="ts">
  // @ts-nocheck
  import TripSummary from './TripSummary.svelte';
  import StepTwo from './StepTwo.svelte';
  import GuestDetail from './GuestDetail.svelte';
  import OrderSummary from './OrderSummary.svelte';
  import Container from '$lib/components/layout/Container.svelte';

  // Order summary
  const bookingId = '996392464';
  const subtotalItems = [
    { label: '2-Days Trip with Bali Enjoy Tour', amount: 453000 },
    { label: 'Insurance A (x2)', amount: 286000 },
    { label: 'Service Fee', amount: 0, free: true },
    // { label: 'Coupon Discount', amount: -20000 },
  ];
</script>

<StepTwo />
<!-- MAIN CONTENT -->
<div class="page">
<Container>
  <!-- LEFT COLUMN -->
  <div class="left">
    <GuestDetail />
    <section class="card">
    <h2 class="section-title">Trip Summary</h2>
    <TripSummary />
    </section>
  </div>
  <!-- RIGHT COLUMN -->
  <div class="right">
    <OrderSummary
      {bookingId}
      {subtotalItems}
      ctaHref="/booking/payment"
    />
  </div>
</Container>
</div>

<style>
  /* ===== PAGE LAYOUT ===== */
.page {
  margin: 24px auto;
  padding: 0 24px;
}

/* INI KUNCINYA */
.page :global(.container) {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 32px;
  align-items: start;
}

  /* ===== CARD ===== */
  .card {
    background: #fff;
    border-radius: 12px;
    padding: 0;
    margin-bottom: 20px;
    /* box-shadow: 0 1px 4px rgba(0,0,0,0.06); */
  }

  .section-title {
    font-size: 28px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
    margin: 0 0 18px;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    .page {
      padding: 0 16px;
      margin: 16px auto;
    }

    .page :global(.container) {
      grid-template-columns: 1fr; /* ⬅️ PINDAHIN KE SINI */
    }
  }
</style>