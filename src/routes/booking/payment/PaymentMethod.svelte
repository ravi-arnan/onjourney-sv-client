<script lang="ts">
  // @ts-nocheck

  type PaymentType = 'full' | 'split';
  type PaymentMethod = 'bank_transfer' | 'credit_card' | 'ewallet';
  type Bank = 'bca' | 'bni' | 'mandiri' | 'permata';
  type Wallet = 'gopay' | 'ovo' | 'spay' | 'dana' | 'linkaja';

  export let totalAmount: number = 739000;

  const MAX_SPLITS = 3;

  const banks = [
    { id: 'bca', label: 'BCA', image: '/src/lib/assets/Bank/BCA.png' },
    { id: 'bni', label: 'BNI', image: '/src/lib/assets/Bank/BNI.png' },
    { id: 'mandiri', label: 'Mandiri', image: '/src/lib/assets/Bank/Mandiri.png' },
    { id: 'permata', label: 'PermataBank', image: '/src/lib/assets/Bank/Permata.png' },
  ];

  const ewallets = [
    { id: 'gopay', label: 'GoPay', image: '/src/lib/assets/EWallet/GoPay.png' },
    { id: 'ovo', label: 'OVO', image: '/src/lib/assets/EWallet/OVO.png' },
    { id: 'spay', label: 'ShopeePay', image: '/src/lib/assets/EWallet/SPay.png' },
    { id: 'dana', label: 'DANA', image: '/src/lib/assets/EWallet/DANA.png' },
    { id: 'linkaja', label: 'LinkAja', image: '/src/lib/assets/EWallet/LinkAja.png' },
  ];

  const formatRp = (n: number) => 'Rp ' + n.toLocaleString('id-ID');

  // ===== Pay Type =====
  let paymentType: PaymentType = 'full';

  // ===== Full Payment State =====
  let fullMethod: PaymentMethod = 'bank_transfer';
  let fullBank: Bank = 'bca';
  let fullWallet: Wallet = 'gopay';

  // ===== Split Payment State =====
  interface Split {
    id: number;
    amount: number;
    method: PaymentMethod;
    bank: Bank;      
    wallet: Wallet;
  }

  const calcAmounts = (count: number) => {
    const base = Math.floor(totalAmount / count);
    const remainder = totalAmount - base * (count - 1);
    return Array.from({ length: count }, (_, i) => i === count - 1 ? remainder : base);
  };

  let splits: Split[] = (() => {
    const amounts = calcAmounts(2);
    return [
      { id: 1, amount: amounts[0], method: 'bank_transfer', bank: 'bca', wallet: 'gopay' },
      { id: 2, amount: amounts[1], method: 'bank_transfer', bank: 'bca', wallet: 'gopay' },
    ];
  })();

  const addSplit = () => {
    if (splits.length >= MAX_SPLITS) return;
    const amounts = calcAmounts(splits.length + 1);
    splits = splits.map((s, i) => ({ ...s, amount: amounts[i] }));
    splits = [
      ...splits,
      {
        id: splits.length + 1,
        amount: amounts[amounts.length - 1],
        method: 'bank_transfer',
        bank: 'bca',    // ← ganti
        wallet: 'gopay' // ← ganti
      }
    ];
  };

  const removeSplit = () => {
    splits = splits.filter(s => s.id !== splits[splits.length - 1].id);
    const amounts = calcAmounts(2);
    splits = splits.map((s, i) => ({ ...s, amount: amounts[i] }));
  };

  const setMethod = (splitId: number, method: PaymentMethod) => {
    splits = splits.map(s => s.id === splitId ? { ...s, method } : s);
  };

  const setBank = (splitId: number, bank: Bank) => {
    splits = splits.map(s => s.id === splitId ? { ...s, bank } : s);
  };

  const setWallet = (splitId: number, wallet: Wallet) => {
    splits = splits.map(s => s.id === splitId ? { ...s, wallet } : s);
  };

  export let selectedPaymentType = 'full';
  export let selectedFullMethod = 'bank_transfer';
  export let selectedFullBank = 'bca';
  export let selectedFullWallet = 'gopay';
  export let selectedSplits = [];

  $: selectedPaymentType = paymentType;
  $: selectedFullMethod = fullMethod;
  $: selectedFullBank = fullBank;
  $: selectedFullWallet = fullWallet;
  $: selectedSplits = splits;
</script>

<div class="payment-left">

  <!-- HOW WOULD YOU LIKE TO PAY -->
  <section class="section-block">
    <h2 class="section-title">How Would You Like To Pay</h2>

    <div class="option-row">
      <button
        class="option-card"
        class:selected={paymentType === 'full'}
        on:click={() => paymentType = 'full'}
      >
        <div class="radio" class:active={paymentType === 'full'}></div>
        <span>Pay Full Amount</span>
      </button>

      <button
        class="option-card"
        class:selected={paymentType === 'split'}
        on:click={() => paymentType = 'split'}
      >
        <div class="radio" class:active={paymentType === 'split'}></div>
        <span>Split Payment</span>
      </button>
    </div>
  </section>

  <hr class="divider" />

  <!-- ===================== FULL PAYMENT ===================== -->
  {#if paymentType === 'full'}
    <div class="full-payment-wrapper">

      <section class="section-block">
        <h2 class="section-title">Select Payment Method</h2>
        <p class="sub-label">Payment Method</p>

        <div class="method-row">
          <button
            class="method-card"
            class:selected={fullMethod === 'bank_transfer'}
            on:click={() => fullMethod = 'bank_transfer'}
          >
            <div class="radio" class:active={fullMethod === 'bank_transfer'}></div>
            <span>Bank Transfer</span>
          </button>

          <button
            class="method-card"
            class:selected={fullMethod === 'credit_card'}
            on:click={() => fullMethod = 'credit_card'}
          >
            <div class="radio" class:active={fullMethod === 'credit_card'}></div>
            <span>Credit/Debit Card</span>
          </button>

          <button
            class="method-card"
            class:selected={fullMethod === 'ewallet'}
            on:click={() => fullMethod = 'ewallet'}
          >
            <div class="radio" class:active={fullMethod === 'ewallet'}></div>
            <span>E-Wallet</span>
          </button>
        </div>
      </section>

      {#if fullMethod === 'bank_transfer'}
        <section class="section-block">
          <p class="sub-label">Select Bank</p>
          <div class="bank-grid">
            {#each banks as bank}
              <button
                class="bank-card"
                class:selected={fullBank === bank.id}
                on:click={() => fullBank = bank.id}
              >
                <div class="radio" class:active={fullBank === bank.id}></div>
                {#if bank.image}
                  <img src={bank.image} alt={bank.label} class="bank-logo-img" />
                {:else}
                  <span class="bank-label">{bank.label}</span>
                {/if}
              </button>
            {/each}
          </div>
        </section>
      {/if}

      {#if fullMethod === 'credit_card'}
        <section class="section-block">
          <div class="paylabs-info">
            <img src="/src/lib/assets/Bank/PayLabs.png" alt="Paylabs" class="paylabs-logo" />
            <p class="paylabs-desc">
              On-Journey uses Paylabs to process your credit and debit card transactions, ensuring a secure and reliable payment experience.
            </p>
          </div>
        </section>
      {/if}

      {#if fullMethod === 'ewallet'}
        <section class="section-block">
          <p class="sub-label">Select E-Wallet</p>
          <div class="bank-grid">
            {#each ewallets as wallet}
              <button
                class="bank-card"
                class:selected={fullWallet === wallet.id}
                on:click={() => fullWallet = wallet.id}
              >
                <div class="radio" class:active={fullWallet === wallet.id}></div>
                {#if wallet.image}
                  <img src={wallet.image} alt={wallet.label} class="bank-logo-img" />
                {:else}
                  <span class="bank-label">{wallet.label}</span>
                {/if}
              </button>
            {/each}
          </div>
        </section>
      {/if}

    </div>

  <!-- ===================== SPLIT PAYMENT ===================== -->
  {:else}
    <div class="split-wrapper">
      <h3 class="split-title">Split Amount</h3>

      {#each splits as split, index (split.id)}
        <div class="split-block">

          <div class="split-header">
            <div class="split-header-left">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span>Split Amount {split.id}</span>
            </div>
            {#if splits.length === MAX_SPLITS && index === MAX_SPLITS - 1}
              <button class="remove-btn" on:click={removeSplit}>Remove</button>
            {/if}
          </div>

          <div class="field">
            <label for="amount-{split.id}">Amount</label>
            <input
              id="amount-{split.id}"
              type="text"
              value={formatRp(split.amount)}
              readonly={splits.length === MAX_SPLITS && index === MAX_SPLITS - 1}
              class:readonly={splits.length === MAX_SPLITS && index === MAX_SPLITS - 1}
              on:focus={(e) => {
                if (!(splits.length === MAX_SPLITS && index === MAX_SPLITS - 1)) {
                  e.target.value = split.amount;
                }
              }}
              on:blur={(e) => {
                if (splits.length === MAX_SPLITS && index === MAX_SPLITS - 1) return;
                const val = parseInt(e.target.value) || 0;
                splits = splits.map(s => s.id === split.id ? { ...s, amount: val } : s);
                e.target.value = formatRp(val);
              }}
            />
          </div>

          <p class="sub-label">Payment Method</p>
          <div class="method-row">
            {#each [
              { id: 'bank_transfer', label: 'Bank Transfer' },
              { id: 'credit_card', label: 'Credit/Debit Card' },
              { id: 'ewallet', label: 'E-Wallet' }
            ] as m}
              <button
                class="method-card"
                class:selected={split.method === m.id}
                on:click={() => setMethod(split.id, m.id)}
              >
                <div class="radio" class:active={split.method === m.id}></div>
                <span>{m.label}</span>
              </button>
            {/each}
          </div>

          {#if split.method === 'bank_transfer'}
            <p class="sub-label">Select Bank</p>
            <div class="bank-grid">
              {#each banks as bank}
                <button
                  class="bank-card"
                  class:selected={split.bank === bank.id}
                  on:click={() => setBank(split.id, bank.id)}
                >
                  <div class="radio" class:active={split.bank === bank.id}></div>
                  {#if bank.image}
                    <img src={bank.image} alt={bank.label} class="bank-logo-img" />
                  {:else}
                    <span class="bank-label">{bank.label}</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}

          {#if split.method === 'ewallet'}
            <p class="sub-label">Select E-Wallet</p>
            <div class="bank-grid">
              {#each ewallets as wallet}
                <button
                  class="bank-card"
                  class:selected={split.wallet === wallet.id}
                  on:click={() => setWallet(split.id, wallet.id)}
                >
                  <div class="radio" class:active={split.wallet === wallet.id}></div>
                  {#if wallet.image}
                    <img src={wallet.image} alt={wallet.label} class="bank-logo-img" />
                  {:else}
                    <span class="bank-label">{wallet.label}</span>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}

          {#if split.method === 'credit_card'}
            <div class="paylabs-info">
              <img src="/src/lib/assets/Bank/PayLabs.png" alt="Paylabs" class="paylabs-logo" />
              <p class="paylabs-desc">
                On-Journey uses Paylabs to process your credit and debit card transactions, ensuring a secure and reliable payment experience.
              </p>
            </div>
          {/if}

        </div>
      {/each}

      {#if splits.length >= MAX_SPLITS}
        <div class="max-warning">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" style="flex-shrink:0;">
            <!-- Lingkaran luar -->
            <circle cx="12" cy="12" r="10"/>
            <!-- Garis tanda seru -->
            <line x1="12" y1="7" x2="12" y2="13"/>
            <!-- Titik tanda seru -->
            <circle cx="12" cy="17" r="1"/>
          </svg>
          <span>You can only split this payment into a <strong>maximum of {MAX_SPLITS} parts</strong>. Please adjust your selection.</span>
        </div>
      {/if}

      {#if splits.length < MAX_SPLITS}
        <button class="add-split-btn" on:click={addSplit}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add More Split
        </button>
      {/if}
    </div>
  {/if}

</div>

<style>
  /* ===== LAYOUT ===== */
  .payment-left {
    display: flex;
    flex-direction: column;
  }

  .section-block {
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 20px;
    font-weight: 200;
    color: #1a1a1a;
    margin: 0 0 16px 0;
  }

  .sub-label {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    margin: 0 0 12px 0;
  }

  .divider {
    border: none;
    border-top: 1px solid #f0f0f0;
    margin: 0 0 24px 0;
  }

  /* ===== OPTION ROW (Pay Full / Split) ===== */
  .option-row {
    display: flex;
    gap: 12px;
  }

  .option-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: border-color 0.15s, background 0.15s;
    flex: 1;
  }

  .option-card.selected {
    border-color: #3f9ef0;
    background: #f0f8ff;
  }

  /* ===== METHOD ROW ===== */
  .method-row {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(3, 1fr);
  }

  .method-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 16px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: border-color 0.15s, background 0.15s;
  }

  .method-card.selected {
    border-color: #3f9ef0;
    background: #f0f8ff;
  }

  /* ===== RADIO BUTTON ===== */
  .radio {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    flex-shrink: 0;
    position: relative;
    transition: border-color 0.15s;
  }

  .radio.active {
    border-color: #3f9ef0;
  }

  .radio.active::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #3f9ef0;
  }

  /* ===== BANK / WALLET GRID ===== */
  .bank-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .bank-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 16px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
  }

  .bank-card.selected {
    border-color: #3f9ef0;
    background: #f0f8ff;
  }

  .bank-logo-img {
    height: 24px;
    width: auto;
    object-fit: contain;
  }

  .bank-label {
    font-size: 13px;
    font-weight: 600;
    color: #333;
  }

  /* ===== PAYLABS ===== */
  .paylabs-info {
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .paylabs-logo {
    height: 28px;
    width: auto;
    object-fit: contain;
    align-self: flex-start;
  }

  .paylabs-desc {
    font-size: 13px;
    color: #888;
    line-height: 1.6;
    margin: 0;
  }

  /* ===== FULL PAYMENT WRAPPER ===== */
  .full-payment-wrapper {
    display: flex;
    flex-direction: column;
  }

  /* ===== SPLIT PAYMENT ===== */
  .split-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .split-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 16px 0;
  }

  .split-block {
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .split-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .split-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #555;
  }

  .remove-btn {
    background: none;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 12px;
    color: #555;
    cursor: pointer;
    transition: border-color 0.15s, color 0.15s;
  }

  .remove-btn:hover {
    border-color: #e74c3c;
    color: #e74c3c;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field label {
    font-size: 12px;
    font-weight: 500;
    color: #555;
  }

  .field input {
    padding: 10px 14px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    color: #333;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.15s;
    background: #fff;
  }

  .field input:focus {
    border-color: #3f9ef0;
  }

  .field input.readonly {
    background: #f5f5f5;
    color: #888;
    cursor: not-allowed;
  }

  .max-warning {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 13px;
    color: #92400e;
    line-height: 1.5;
    margin-bottom: 4px;
  }

  .max-warning strong {
    color: #92400e;
  }

  .add-split-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: 1px solid #3f9ef0;
    color: #3f9ef0;
    border-radius: 20px;
    padding: 10px 18px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.15s;
    align-self: flex-start;
  }

  .add-split-btn:hover {
    background: #f0f7ff;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 768px) {
    .option-row {
      flex-direction: column;
    }

    .method-row {
      grid-template-columns: 1fr;
    }

    .bank-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>