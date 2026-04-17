<script lang="ts">
  // @ts-nocheck
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let bookingId: string = '';
  export let subtotalItems: { label: string; amount: number; free?: boolean }[] = [];

  $: total = subtotalItems.reduce((s, i) => s + i.amount, 0);

  const formatRp = (n) => {
    if (n === 0) return 'FREE';
    const abs = Math.abs(n);
    const str = 'Rp ' + abs.toLocaleString('id-ID');
    return n < 0 ? '-' + str : str;
  };
  
  function handleContinue() {
    dispatch('proceed');
  }
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
    {#each subtotalItems as item}
      <div class="subtotal-row">
        <span class="subtotal-name">{item.label}</span>
        <span class="subtotal-amount" class:free={item.free} class:discount={item.amount < 0}>
          {formatRp(item.amount)}
        </span>
      </div>
    {/each}
  </div>

  <!-- tambah ini -->
  <p class="additional-note">Additional fees from payment method may applied after proceed the payment.</p>

  <hr class="divider" />

  <!-- Total -->
  <div class="total-row">
    <span class="total-label">Total</span>
    <span class="total-amount">Rp {total.toLocaleString('id-ID')}</span>
  </div>

  <!-- CTA -->
<button class="cta-btn" on:click={handleContinue}>Continue Payment</button>
  
  <p class="terms-note">
    By clicking the Proceed Payment, you agree to
    <a href="/terms" class="terms-link">On Journey's Terms & Conditions</a> & <a href="/privacy" class="terms-link">Privacy Policy</a>
  </p>
</div>



<style>
  .order-card {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #e5e7eb;
    position: sticky;
    top: 20px;
  }

  .order-label {
    font-size: 20px;
    font-weight: 200;
    color: #222222;
    margin: 0 0 6px 0;
  }

  .booking-id-block {
    margin-bottom: 4px;
  }

  .booking-id {
    font-size: 14px;
    color: #2097F5;
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
    color: #222222;
    flex: 1;
    line-height: 1.4;
  }

  .subtotal-amount {
    font-size: 13px;
    color: #aaa;
    font-weight: 300;
    white-space: nowrap;
  }

  .subtotal-amount.free { color: #aaa; }
  .subtotal-amount.discount { color: #e74c3c; }

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
    color: #222222;
  }

  .total-amount {
    font-size: 22px;
    font-weight: 500;
    color: #2097F5;
  }

  a {
    text-decoration: none;
  }

  .cta-btn {
    width: 100%;
    padding: 14px;
    background: #2097F5;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .cta-btn:hover { background: #2097F5; }

  .additional-note {
    font-size: 12px;
    color: #aaa;
    line-height: 1.6;
    margin: 12px 0 0 0;
  }

  .terms-note {
    font-size: 12px;
    color: #aaa;
    line-height: 1.5;
    margin: 14px 0 0 0;
    text-align: left;
  }

  .terms-link {
    color: #2097F5;
    text-decoration: none;
  }

  .terms-link:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .order-card { 
      position: static; 
    }
  }
</style>