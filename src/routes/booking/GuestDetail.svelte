<script lang="ts">
	// @ts-nocheck
	import { slide } from 'svelte/transition';

	let guests = $state([
		{ id: 1, open: true, sameAsUser: false, fullName: '', phone: '', email: '' }
	]);

	const addGuest = () => {
		guests = [
			...guests,
			{ id: guests.length + 1, open: true, sameAsUser: false, fullName: '', phone: '', email: '' }
		];
	};

	const toggleGuest = (id) => {
		guests = guests.map((g) => (g.id === id ? { ...g, open: !g.open } : g));
	};

	const toggleSameAsUser = (id) => {
		guests = guests.map((g) => (g.id === id ? { ...g, sameAsUser: !g.sameAsUser } : g));
	};
</script>

<!-- GUEST DETAILS -->
<section class="card">
	<h2 class="section-title">Guest Details</h2>

	{#each guests as guest (guest.id)}
		<div class="guest-block">
			<!-- Guest header -->
			<div class="guest-header">
				<div class="guest-title">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#888"
						stroke-width="1.8"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
					<span>Guest {guest.id}</span>
				</div>

				<div class="guest-header-right">
					{#if guest.id === 1}
						<span class="same-label">Same as user details</span>
						<button
							type="button"
							class="toggle"
							class:on={guest.sameAsUser}
							onclick={(event) => {
								event.stopPropagation();
								toggleSameAsUser(guest.id);
							}}
							aria-label="Same as user"
						>
							<span class="toggle-knob"></span>
						</button>
					{/if}

					<button
						type="button"
						class="chevron-btn"
						onclick={(event) => {
							event.stopPropagation();
							toggleGuest(guest.id);
						}}
						aria-label={guest.open ? 'Collapse guest' : 'Expand guest'}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#888"
							stroke-width="2"
							style="transform: rotate({guest.open ? 180 : 0}deg); transition: transform 0.2s;"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Guest form -->
			{#if guest.open}
				<div class="guest-form" transition:slide={{ duration: 200 }}>
					<div class="field full">
						<label for="name-{guest.id}">Full Name</label>
						<input
							id="name-{guest.id}"
							type="text"
							placeholder="Enter Guest {guest.id} Full Name"
							bind:value={guest.fullName}
							disabled={guest.sameAsUser}
						/>
					</div>

					<div class="field-row">
						<div class="field">
							<label for="phone-{guest.id}">Phone Number</label>
							<input
								id="phone-{guest.id}"
								type="tel"
								placeholder="Enter Guest {guest.id} phone number"
								bind:value={guest.phone}
								disabled={guest.sameAsUser}
							/>
						</div>
						<div class="field">
							<label for="email-{guest.id}">Email Address</label>
							<input
								id="email-{guest.id}"
								type="email"
								placeholder="Enter Guest {guest.id} email address"
								bind:value={guest.email}
								disabled={guest.sameAsUser}
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/each}

	<!-- Add guest button -->
	<button type="button" class="add-guest-btn" onclick={addGuest}>
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2.5"
		>
			<line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
		</svg>
		Add Guest {guests.length + 1} Details
	</button>
</section>

<style>
	.card {
		background: #fff;
		border-radius: 12px;
		padding: 0;
		margin-bottom: 20px;
		border-bottom: 1px solid #eee;
	}

	.section-title {
		font-size: 28px;
		font-weight: 600;
		color: #1a1a1a;
		line-height: 1.2;
		margin: 0 0 18px;
	}

	/* ===== GUEST BLOCK ===== */
	.guest-block {
		border: 1px solid #e8e8e8;
		border-radius: 10px;
		margin-bottom: 12px;
		/* overflow: hidden dihapus — ini yang menghalangi klik chevron */
	}

	.guest-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 16px;
		background: #fff;
		border-bottom: 1px solid #eee;
		border-radius: 10px 10px 0 0;
		cursor: default;
	}

	.guest-title {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 15px;
		font-weight: 400;
		color: #333;
	}

	.guest-header-right {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.same-label {
		font-size: 14px;
		color: #000;
		font-weight: 400;
	}

	/* ===== TOGGLE ===== */
	.toggle {
		width: 46px;
		height: 27px;
		border-radius: 15px;
		background: #ddd;
		border: none;
		cursor: pointer;
		position: relative;
		transition: background 0.2s;
		padding: 0;
		flex-shrink: 0;
	}

	.toggle.on {
		background: #3f9ef0;
	}

	.toggle-knob {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #fff;
		transition: left 0.2s;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
		pointer-events: none;
	}

	.toggle.on .toggle-knob {
		left: 21px;
	}

	/* ===== CHEVRON ===== */
	.chevron-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		transition: background 0.15s;
		/* Pastikan area klik cukup besar */
		min-width: 32px;
		min-height: 32px;
	}

	.chevron-btn:hover {
		background: #f5f5f5;
	}

	/* ===== GUEST FORM ===== */
	.guest-form {
		padding: 0 18px 16px;
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 6px;
		flex: 1;
	}

	.field.full {
		width: 100%;
		margin-top: 20px;
	}

	.field-row {
		display: flex;
		gap: 20px;
	}

	.field label {
		font-size: 15px;
		font-weight: 400;
		color: #000;
	}

	.field input {
		padding: 14px 10px;
		border: 1px solid #e0e0e0;
		border-radius: 12px;
		font-size: 13px;
		color: #333;
		outline: none;
		transition: border-color 0.15s;
		background: #fff;
	}

	.field input:focus {
		border-color: #3f9ef0;
	}

	.field input::placeholder {
		color: #bbb;
	}

	.field input:disabled {
		background: #f5f5f5;
		color: #aaa;
	}

	/* ===== ADD GUEST BUTTON ===== */
	.add-guest-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		background: none;
		border: 1px solid #c7e5fc;
		color: #3f9ef0;
		border-radius: 20px;
		padding: 10px 18px;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		margin-top: 4px;
		margin-bottom: 30px;
		transition: background 0.15s;
	}

	.add-guest-btn:hover {
		background: #f0f7ff;
	}

	@media (max-width: 768px) {
		.field-row {
			flex-direction: column;
		}

		.same-label {
			display: none;
		}
	}
</style>
