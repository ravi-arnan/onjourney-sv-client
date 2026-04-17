<script lang="ts">
  // @ts-nocheck
  import { onMount, onDestroy } from 'svelte';
  import { goto } from '$app/navigation';
  import StepLast from "./StepLast.svelte";
  import Container from '$lib/components/layout/Container.svelte';

  // ── State ──────────────────────────────────────────────
  let paymentType = 'full';
  let method      = 'bank_transfer';
  let bank        = 'bca';
  let wallet      = 'gopay';
  let bookingId   = '';
  let subtotalItems = [];

  /**
   * splits: Array<{
   *   id:     number,
   *   amount: number,
   *   method: 'bank_transfer' | 'ewallet' | 'credit_card',
   *   bank:   string | null,   // diisi jika method === 'bank_transfer'
   *   wallet: string | null,   // diisi jika method === 'ewallet'
   * }>
   */
  let splits = [];

  onMount(() => {
    const raw = sessionStorage.getItem('payment_data');
    if (!raw) { goto('/booking/payment'); return; }

    const data    = JSON.parse(raw);
    paymentType   = data.paymentType;
    method        = data.method;
    bank          = data.bank;
    wallet        = data.wallet;
    splits        = data.splits ?? [];
    bookingId     = data.bookingId;
    subtotalItems = data.subtotalItems ?? [];
  });

  // ── Derived ────────────────────────────────────────────
  $: total      = subtotalItems.reduce((s, i) => s + i.amount, 0);
  $: splitCount = splits.length;

  const formatRp = (n) => 'Rp ' + Math.abs(n).toLocaleString('id-ID');

  // ── VA data ────────────────────────────────────────────
  const vaData = {
    bca:     { number: '8277-9431-6412-5517', logo: '/src/lib/assets/Bank/BCA.png' },
    bni:     { number: '8800-0012-3456-7890', logo: '/src/lib/assets/Bank/BNI.png' },
    mandiri: { number: '8901-0023-4567-8901', logo: '/src/lib/assets/Bank/Mandiri.png' },
    permata: { number: '8501-3456-7890-1234', logo: '/src/lib/assets/Bank/Permata.png' },
  };

  // E-Wallet logo map
  const walletLogo = {
    gopay:   '/src/lib/assets/EWallet/GoPay.png',
    ovo:     '/src/lib/assets/EWallet/OVO.png',
    spay:    '/src/lib/assets/EWallet/SPay.png',
    dana:    '/src/lib/assets/EWallet/DANA.png',
    linkaja: '/src/lib/assets/EWallet/LinkAja.png',
  };

  const walletLabel = {
    gopay:   'GoPay',
    ovo:     'OVO',
    spay:    'ShopeePay',
    dana:    'DANA',
    linkaja: 'LinkAja',
  };

  $: vaInfo = vaData[bank] ?? vaData['bca'];

  // ── Countdown ──────────────────────────────────────────
  let hours = 48, minutes = 0, seconds = 0;
  let timer;
  onMount(() => {
    timer = setInterval(() => {
      if (seconds > 0) seconds--;
      else if (minutes > 0) { minutes--; seconds = 59; }
      else if (hours > 0)   { hours--;   minutes = 59; seconds = 59; }
      else clearInterval(timer);
    }, 1000);
  });
  onDestroy(() => clearInterval(timer));
  const pad = (n) => String(n).padStart(2, '0');

  // ── Copy ───────────────────────────────────────────────
  let copied = '';
  function copy(text, key) {
    navigator.clipboard.writeText(String(text).replace(/-/g, ''));
    copied = key;
    setTimeout(() => copied = '', 2000);
  }

  // ── Show instruction per card ──────────────────────────
  let showInstruction: Record<string, boolean> = {};
  function toggleInstruction(key: string) {
    showInstruction[key] = !showInstruction[key];
    showInstruction = { ...showInstruction };
  }
</script>

<StepLast />

<div class="page">
  <Container>
    <div class="left">

      <p class="page-title">Payment Summary</p>

      <!-- Info Banner -->
      <div class="info-banner">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;margin-top:1px">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>Payment instructions also have been sent to each email. Once your payment is confirmed, we will send your trip e-ticket to your email address.</p>
      </div>

      <!-- Countdown -->
      <div class="countdown-card">
        <p class="deadline-text">Pay before 25 March 2025 16:12 PM</p>
        <p class="cancel-warning">Booking will be automatically cancelled after time limit</p>
        <div class="timer-row">
          <div class="time-block">{pad(hours)}</div>
          <span class="colon">:</span>
          <div class="time-block">{pad(minutes)}</div>
          <span class="colon">:</span>
          <div class="time-block">{pad(seconds)}</div>
        </div>
        <div class="timer-labels">
          <span>hours</span><span>minutes</span><span>seconds</span>
        </div>
      </div>

      <!-- ══════════════════════════════════════════
           FULL — Bank Transfer
      ══════════════════════════════════════════ -->
      {#if paymentType === 'full' && method === 'bank_transfer'}
        <div class="va-section-label">Virtual Account</div>
        <div class="va-card">
          <div class="bank-logo-row">
            <img src={vaInfo.logo} alt={bank} class="bank-logo" />
          </div>
          <div class="va-row">
            <p class="va-label">Virtual Account Number</p>
            <div class="va-value">
              <span class="va-number">{vaInfo.number}</span>
              <button class="copy-btn" class:copied={copied === 'va'} on:click={() => copy(vaInfo.number, 'va')}>
                {copied === 'va' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <div class="va-row">
            <p class="va-label">Transfer Amount</p>
            <div class="va-value1">
              <span class="transfer-amount">{formatRp(total)}</span>
              <button class="copy-btn" class:copied={copied === 'amt'} on:click={() => copy(total, 'amt')}>
                {copied === 'amt' ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          <button class="show-instruction-btn" on:click={() => toggleInstruction('full')}>
            Show payment instruction
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              style="transform: rotate({showInstruction['full'] ? 180 : 0}deg); transition: transform 0.2s">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {#if showInstruction['full']}
            <ol class="instruction-list">
              <li>Login to your {bank.toUpperCase()} mobile banking or ATM</li>
              <li>Select <strong>Transfer → Virtual Account</strong></li>
              <li>Enter the virtual account number above</li>
              <li>Confirm the transfer amount matches exactly</li>
              <li>Complete the transaction</li>
            </ol>
          {/if}
        </div>
      {/if}

      <!-- ══════════════════════════════════════════
           FULL — E-Wallet
      ══════════════════════════════════════════ -->
      {#if paymentType === 'full' && method === 'ewallet'}
        <div class="va-section-label">E-Wallet Payment</div>
        <div class="va-card ewallet-card">
          <div class="bank-logo-row">
            <img src={walletLogo[wallet]} alt={wallet} class="bank-logo" />
          </div>
          <p class="ewallet-info">
            Open your <strong>{walletLabel[wallet] ?? wallet}</strong> app and complete the payment.
            You will receive a notification once confirmed.
          </p>
        </div>
      {/if}

      <!-- ══════════════════════════════════════════
           FULL — Credit Card (Paylabs iframe)
      ══════════════════════════════════════════ -->
      {#if paymentType === 'full' && method === 'credit_card'}
        <div class="cc-section">
          <h2 class="cc-title">Credit/Debit Card Payment</h2>
          <div class="paylabs-iframe-wrapper">
            <iframe
              src="https://payment.paylabs.co.id/checkout"
              title="Paylabs Payment"
              class="paylabs-iframe"
              allow="payment"
              sandbox="allow-scripts allow-forms allow-same-origin allow-top-navigation"
            ></iframe>
          </div>
          <p class="paylabs-note">
          </p>
        </div>
      {/if}

      <!-- ══════════════════════════════════════════
           SPLIT — render satu card per split item
           Setiap card mengikuti method yang dipilih
           user di halaman sebelumnya
      ══════════════════════════════════════════ -->
      {#if paymentType === 'split'}
        <div class="va-section-label">Virtual Account</div>

        {#each splits as split, i}
          {@const instrKey = `instr-${i}`}

          <div class="va-card split-card">

            <!-- Badge header -->
            <div class="split-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>Split Amount {splitCount}</span>
            </div>
            <div class="split-divider"></div>

            <div class="split-body">

              <!-- ── Bank Transfer ── -->
              {#if split.method === 'bank_transfer'}
                {@const va = vaData[split.bank] ?? vaData['bca']}
                {@const vaKey  = `va-${i}`}
                {@const amtKey = `amt-${i}`}

                <div class="bank-logo-row">
                  <img src={va.logo} alt={split.bank} class="bank-logo" />
                </div>

                <div class="va-row">
                  <p class="va-label">Virtual Account Number</p>
                  <div class="va-value">
                    <span class="va-number">{va.number}</span>
                    <button class="copy-btn" class:copied={copied === vaKey} on:click={() => copy(va.number, vaKey)}>
                      {copied === vaKey ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div class="va-row">
                  <p class="va-label">Transfer Amount</p>
                  <div class="va-value1">
                    <span class="transfer-amount">{formatRp(split.amount)}</span>
                    <button class="copy-btn" class:copied={copied === `amt-${i}`} on:click={() => copy(split.amount, `amt-${i}`)}>
                      {copied === `amt-${i}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                <button class="show-instruction-btn" on:click={() => toggleInstruction(instrKey)}>
                  Show payment instruction
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    style="transform: rotate({showInstruction[instrKey] ? 180 : 0}deg); transition: transform 0.2s">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {#if showInstruction[instrKey]}
                  <ol class="instruction-list">
                    <li>Login to your {(split.bank ?? 'BCA').toUpperCase()} mobile banking or ATM</li>
                    <li>Select <strong>Transfer → Virtual Account</strong></li>
                    <li>Enter the virtual account number above</li>
                    <li>Confirm the transfer amount matches exactly</li>
                    <li>Complete the transaction</li>
                  </ol>
                {/if}
              {/if}

              <!-- ── E-Wallet ── -->
              {#if split.method === 'ewallet'}
                <div class="bank-logo-row">
                  <img src={walletLogo[split.wallet]} alt={split.wallet} class="bank-logo" />
                </div>
                <p class="ewallet-split-amount">{formatRp(split.amount)}</p>
                <p class="ewallet-info">
                  Open your <strong>{walletLabel[split.wallet] ?? split.wallet}</strong> app and complete
                  this portion of the payment. You will receive a notification once confirmed.
                </p>
              {/if}

              <!-- ── Credit Card (Paylabs) ── -->
              {#if split.method === 'credit_card'}
                <div class="paylabs-iframe-wrapper split-paylabs-full">
                  <iframe
                    src="https://payment.paylabs.co.id/checkout"
                    title="Paylabs Payment"
                    class="paylabs-iframe"
                    allow="payment"
                    sandbox="allow-scripts allow-forms allow-same-origin allow-top-navigation"
                  ></iframe>
                </div>
              {/if}
            </div><!-- /split-body -->
            <div class="split-body" class:no-padding={split.method === 'credit_card'}></div>
          </div><!-- /split-card -->
        {/each}
      {/if}

    </div><!-- /left -->

    <!-- RIGHT: Order Summary -->
    <div class="right">
      <div class="order-card">
        <div class="booking-id-block">
          <p class="order-label">Booking ID</p>
          <p class="booking-id-val">{bookingId}</p>
        </div>
        <hr class="divider" />
        <p class="subtotal-heading">Subtotal</p>
        <div class="subtotal-list">
          {#each subtotalItems as item}
            <div class="subtotal-row">
              <span class="sub-name">{item.label}</span>
              <span class="sub-amount" class:free={item.free}>
                {item.free ? 'FREE' : formatRp(item.amount)}
              </span>
            </div>
          {/each}
        </div>
        <hr class="divider" />
        <div class="total-row">
          <span class="total-label">Total</span>
          <span class="total-amount">{formatRp(total)}</span>
        </div>
        <a href="/booking/confirmation" style="display:block">
          <button class="cta-btn">See Booking Status</button>
        </a>
        <p class="terms-note">
          By clicking the Proceed Payment, you agree to
          <a href="/terms" class="terms-link">On Journey's Terms & Conditions</a> &
          <a href="/privacy" class="terms-link">Privacy Policy</a>
        </p>
      </div>
    </div>
  </Container>
</div>

<style>
  /* ── Layout ── */
  .page { margin: 32px auto; padding: 0 66px; }
  .page :global(.container) {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 40px;
    align-items: start;
  }
  .left { display: flex; flex-direction: column; gap: 0; }

  /* ── Page title ── */
  .page-title { font-size: 20px; font-weight: 200; color: #222222; margin: 0 0 14px; }

  /* ── Info Banner ── */
  .info-banner {
    display: flex; gap: 10px;
    background: #e8f4fd; color: #1a6fa3;
    border-radius: 8px; padding: 11px 13px;
    font-size: 12px; line-height: 1.5; margin-bottom: 18px; margin-top: 10px;
  }
  .info-banner p { margin: 0; }

  /* ── Countdown ── */
  .countdown-card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px 18px; margin-bottom: 20px; }
  .deadline-text  { font-size: 20px; font-weight: 200; color: #222222; margin: 0 0 16px; }
  .cancel-warning { font-size: 14px; color: #ef4444; margin: 0 0 16px; }
  .timer-row { display: flex; align-items: center; gap: 8px; }
  .time-block {
    background: #FFEDD7; color: #F59320;
    font-size: 20px; font-weight: 600;
    border-radius: 6px; padding: 12px 16px; min-width: 46px; text-align: center;
  }
  .colon { font-size: 18px; font-weight: 600; color: #F59320; margin-bottom: 2px; }
  .timer-labels { display: flex; gap: 28px; margin-top: 5px; font-size: 14px; color: #9ca3af; margin-left: 5px; }
  .timer-labels span { min-width: 46px; text-align: center; }

  /* ── Section label ── */
  .va-section-label { font-size: 20px; font-weight: 200; color: #222222; margin-bottom: 10px; }

  /* ── VA Card (full) ── */
  .va-card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px 18px; margin-bottom: 14px; }
  .ewallet-card { display: flex; flex-direction: column; gap: 10px; }

  /* ── Split Card ── */
  .split-card { padding: 0; overflow: hidden; }
  .split-header {
    display: flex; align-items: center; gap: 8px;
    padding: 11px 16px;
    font-size: 12.5px; font-weight: 500; color: #374151;
    background: #f9fafb;
  }
  .split-header svg { color: #6b7280; flex-shrink: 0; }
  .split-divider { height: 1px; background: #e5e7eb; }
  .split-body { padding: 14px 18px; }
  .split-body.no-padding {
    padding: 0;
  }

  .split-paylabs-full {
    border-radius: 0;
    border: none;
    overflow: hidden;
  }

  /* ── Bank logo ── */
  .bank-logo { height: 22px; object-fit: contain; }
  .bank-logo-row { margin-bottom: 18px; }

  /* ── VA rows ── */
  .va-row { margin-bottom: 20px; }
  .va-label { font-size: 14px; color: #222222; margin: 0 0 10px; }
  .va-value { display: flex; align-items: center; justify-content: space-between; }
  .va-value1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 24px;
  }
  .va-number       { font-size: 18px; font-weight: 600; color: #2097F5; letter-spacing: 0.3px; }
  .transfer-amount { font-size: 18px; font-weight: 600; color: #2097F5; }

  /* ── Copy button ── */
  .copy-btn {
    font-size: 12px; color: #2097F5;
    background: none; border: 1px solid #2097F5;
    border-radius: 20px; padding: 6px 14px; cursor: pointer; transition: all 0.15s; white-space: nowrap;
  }
  .copy-btn:hover { background: #f3f4f6; }
  .copy-btn.copied { color: #2097F5; border-color: #2097F5; }

  /* ── Show instruction ── */
  .show-instruction-btn {
    display: flex; align-items: center; gap: 5px;
    font-size: 12px; color: #2097F5;
    background: none; border: none; cursor: pointer; padding: 0; margin-top: 16px;
  }
  .instruction-list { margin-top: 10px; padding-left: 16px; font-size: 12px; color: #4b5563; line-height: 1.9; }

  /* ── E-Wallet ── */
  .ewallet-info { font-size: 13px; color: #374151; margin: 0; line-height: 1.6; }
  .ewallet-split-amount { font-size: 15px; font-weight: 600; color: #2097F5; margin: 0 0 8px; }

  /* ── Split Paylabs ── */


  /* ── Paylabs iframe ── */
  .cc-section { margin-bottom: 16px; }
  .cc-title { font-size: 14px; font-weight: 600; color: #111827; margin: 0 0 12px; }
  .paylabs-iframe-wrapper {
    border: none;
    border-radius: 0;
    overflow: hidden;
    min-height: 520px;
    background: #f9fafb;
  }
  .paylabs-iframe {
    width: 100%;
    min-height: 520px;
    border: none;
    display: block;
  }
  .paylabs-note { display: flex; align-items: flex-start; gap: 6px; margin-top: 10px; font-size: 11px; color: #9ca3af; line-height: 1.5; }

  /* ── Order Card ── */
  .order-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; background: #fff; position: sticky; top: 20px; }
  .order-label { font-size: 20px; font-weight: 200; color: #222222; margin: 0 0 6px; }
  .booking-id-block { margin-bottom: 14px; }
  .booking-id-val { font-size: 14px; font-weight: 500; color: #3f9ef0; margin: 0; }
  .divider { border: none; border-top: 1px solid #f0f0f0; margin: 16px 0; }
  .subtotal-heading { font-size: 20px; font-weight: 200; color: #222222; margin: 0 0 10px; }
  .subtotal-list { display: flex; flex-direction: column; gap: 20px; margin-top: 12px; }
  .subtotal-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
  .sub-name { font-size: 13px; color: #222222; line-height: 1.4; flex: 1; }
  .sub-amount { font-size: 13px; font-weight: 300; color: #aaa; white-space: nowrap; }
  .sub-amount.free { color: #aaa; font-weight: 300; }
  .total-row {     display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; margin-top: 20px; }
  .total-label {     font-size: 15px; font-weight: 400; color: #222222; }
  .total-amount {     font-size: 22px; font-weight: 500; color: #2097F5; }
  .cta-btn {
    width: 100%; background: #2097F5; color: #fff;
    border: none; border-radius: 999px; padding: 11px;
    font-size: 13.5px; font-weight: 200; cursor: pointer; margin-bottom: 12px; transition: background 0.15s;
  }
  .cta-btn:hover { background: #2097F5; }
  .terms-note { font-size: 12px; color: #9ca3af; text-align: center; line-height: 1.6; margin: 0; text-align: left;}
  .terms-link { color: #2097F5; text-decoration: none; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .page { padding: 0 16px; }
    .page :global(.container) { grid-template-columns: 1fr; }
  }
</style>