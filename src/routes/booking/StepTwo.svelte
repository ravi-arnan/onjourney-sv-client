<script>
	import Container from '$lib/components/layout/Container.svelte';
	const steps = [
		{ number: 1, label: 'Choose Trip', done: true },
		{ number: 2, label: 'Enter Info', done: false, active: true },
		{ number: 3, label: 'Payment', done: false }
	];
</script>

<div class="step-bar">
	<Container>
		{#each steps as step, i (step.number)}
			<div class="step" class:done={step.done} class:active={step.active}>
				<div class="step-circle">
					{#if step.done}
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					{:else}
						{step.number}
					{/if}
				</div>
				<span class="step-label">{step.label}</span>
			</div>
			{#if i < steps.length - 1}
				<div class="step-line" class:done={step.done}></div>
			{/if}
		{/each}
	</Container>
</div>

<style>
	/* ===== STEP BAR ===== */
	.step-bar {
		padding: 18px 66px;
		background: #fff;
		border-bottom: 1px solid #eee;
	}

	.step-bar :global(.container) {
		display: flex;
		align-items: center;
	}

	.step {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
	}

	.step-circle {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		font-weight: 600;
		background: #ffffff;
		border: 1px solid #e0e0e0;
		color: #999;
		flex-shrink: 0;
	}

	.step.done .step-circle {
		background: #c7e5fc;
		color: #3f9ef0;
	}

	.step.active .step-circle {
		background: #3f9ef0;
		color: #fff;
	}

	.step-label {
		font-size: 13px;
		font-weight: 500;
		color: #bbb;
		white-space: nowrap;
	}

	.step.done .step-label,
	.step.active .step-label {
		color: #3f9ef0;
	}

	.step-line {
		width: 100px;
		flex: none;
		height: 1px;
		background: #ddd;
		margin: 0 12px;
	}

	.step-line.done {
		background: #3f9ef0;
	}

	@media (max-width: 768px) {
		.step-bar {
			padding: 16px;
		}

		.step-label {
			display: none;
		}

		.step.active .step-label {
			display: block;
		}
	}
</style>
