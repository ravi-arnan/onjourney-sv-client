<script lang="ts">
	// @ts-nocheck

	interface Experience {
		day: number;
		time: string;
		title: string;
		image: string;
	}

	export let experiences: Experience[] = [
		{ day: 1, time: '06:00', title: 'Jatiluwih Rice Terace', image: '' },
		{ day: 1, time: '10:00', title: 'Nusa Penida', image: '' },
		{ day: 2, time: '06:00', title: 'Aling-aling Waterfall', image: '' },
		{ day: 2, time: '15:00', title: 'Ubud Monkey Forest', image: '' }
	];

	export let totalDays: number = 2;
	export let tourName: string = 'Bali Enjoy Tour';
	export let dateRange: string = '11 March - 12 March 2025';
	export let persons: number = 2;

	$: totalExperiences = experiences.length;
</script>

<div class="trip-summary">
	<!-- Header -->
	<div class="summary-header">
		<span class="summary-count">{totalExperiences} Experiences / {totalDays} days</span>
		<button class="make-changes-btn">Make Changes</button>
	</div>

	<!-- Experience list -->
	<div class="experience-list">
		{#each experiences as exp, i (`${exp.day}-${exp.time}-${exp.title}-${i}`)}
			<div class="experience-item">
				<!-- Step indicator -->
				<div class="step-col">
					<div class="step-dot">{i + 1}</div>
					{#if i < experiences.length - 1}
						<div class="step-connector"></div>
					{/if}
				</div>

				<!-- Image -->
				<div class="exp-image">
					{#if exp.image}
						<img src={exp.image} alt={exp.title} />
					{:else}
						<div class="img-placeholder"></div>
					{/if}
				</div>

				<!-- Info -->
				<div class="exp-info">
					<span class="exp-meta">Day {exp.day} • {exp.time}</span>
					<span class="exp-title">{exp.title}</span>
				</div>
			</div>
		{/each}
	</div>

	<!-- Footer -->
	<div class="summary-footer">
		<!-- Tour avatar -->
		<div class="footer-avatar"></div>
		<span class="tour-name">{tourName}</span>

		<!-- Date -->
		<div class="footer-meta">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8">
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
				<line x1="16" y1="2" x2="16" y2="6" />
				<line x1="8" y1="2" x2="8" y2="6" />
				<line x1="3" y1="10" x2="21" y2="10" />
			</svg>
			<span>{dateRange}</span>
		</div>

		<!-- Persons -->
		<div class="footer-meta">
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
				/>
			</svg>
			<span>{persons} person</span>
		</div>
	</div>
</div>

<style>
	.trip-summary {
		border: 1px solid #e8e8e8;
		border-radius: 12px;
		overflow: hidden;
		background: #fff;
	}

	/* Header */
	.summary-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 20px;
		border-bottom: 1px solid #eee;
	}

	.summary-count {
		font-size: 20px;
		font-weight: 300;
		color: #1a1a1a;
	}

	.make-changes-btn {
		background: none;
		border: 1.5px solid #e0e0e0;
		border-radius: 50px;
		padding: 7px 16px;
		font-size: 13px;
		font-weight: 500;
		color: #333;
		cursor: pointer;
		transition:
			border-color 0.2s,
			color 0.2s;
	}

	.make-changes-btn:hover {
		border-color: #3f9ef0;
		color: #3f9ef0;
	}

	/* Experience list */
	.experience-list {
		padding: 0 20px 14px;
		display: flex;
		flex-direction: column;
		margin-top: 14px;
	}

	.experience-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		position: relative;
	}

	/* Step col */
	.step-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-shrink: 0;
		width: 24px;
		padding-top: 14px;
	}

	.step-dot {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: #c7e5fc;
		color: #3f9ef0;
		font-size: 11px;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		z-index: 1;
	}

	.step-connector {
		width: 1.5px;
		flex: 1;
		min-height: 36px;
		margin-top: 4px;
		border-left: 1.5px dashed #c7e5fc;
	}

	/* Image */
	.exp-image {
		flex-shrink: 0;
		width: 64px;
		height: 64px;
		border-radius: 10px;
		overflow: hidden;
		margin-top: 6px;
	}

	.exp-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.img-placeholder {
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #c8e6c9 0%, #81c784 50%, #4caf50 100%);
	}

	/* Info */
	.exp-info {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-top: 10px;
		padding-bottom: 16px;
		flex: 1;
	}

	.exp-meta {
		font-size: 14px;
		color: #999;
	}

	.exp-title {
		font-size: 16px;
		font-weight: 400;
		color: #1a1a1a;
		text-decoration: underline;
		text-decoration-color: #ccc;
		text-underline-offset: 2px;
	}

	/* Footer */
	.summary-footer {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 14px 20px;
		border-top: 1px solid #f0f0f0;
		flex-wrap: wrap;
	}

	.footer-avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: #d0d0d0;
		flex-shrink: 0;
	}

	.tour-name {
		font-size: 13px;
		font-weight: 500;
		color: #333;
		margin-right: 4px;
	}

	.footer-meta {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 13px;
		color: #333;
	}

	.footer-meta span {
		white-space: nowrap;
	}
</style>
