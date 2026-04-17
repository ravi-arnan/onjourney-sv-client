<script>
	let guests = 1;
	let includeHotels = false;
	let includeMeals = false;

	let tripLength = '';
	let travelAgent = '';

	function increaseGuest() {
		guests += 1;
	}

	function decreaseGuest() {
		if (guests > 1) guests -= 1;
	}

	let destinations = [
		{ day: 1, name: 'Pantai Lovina', date: '23 May 2022' },
		{ day: 2, name: 'Pantai Lovina', date: '23 May 2022' },
		{ day: 3, name: 'Pantai Lovina', date: '23 May 2022' }
	];
</script>

<section class="hero-section">
	<div class="hero-container">
		<h1 class="hero-title">Ready to start your own journey?</h1>
		<p class="hero-subtitle">
			Plan your trip simply by filling out the form below and start your journey!
			<a href="#">learn more</a>
		</p>
	</div>
</section>

<section class="form-section pb-[80px]">
	<div class="container">
		<div class="card">
			<div class="card-header">
				<div class="card-title flex items-center gap-2">
					<img src="/perrr.png" alt="Destination Icon" class="h-6 w-6 object-contain" />
					Which destination are you looking for?
				</div>

				<a href="/destinations" class="see-destination"> See destination list › </a>
			</div>

			<div class="card-body">
				<div class="left">
					<label>Travel Guide Language</label>
					<select>
						<option>What language?</option>
					</select>

					<div class="accommodation">
						<h4>Accommodation</h4>

						<div class="row">
							<span>Total Guest</span>
							<div class="counter">
								<button on:click={decreaseGuest}>−</button>
								<span>{guests}</span>
								<button on:click={increaseGuest}>+</button>
							</div>
						</div>

						<div class="row">
							<span>Include Hotels</span>
							<label class="switch">
								<input type="checkbox" bind:checked={includeHotels} />
								<span class="slider"></span>
							</label>
						</div>

						<div class="row">
							<span>Include Meals</span>
							<label class="switch">
								<input type="checkbox" bind:checked={includeMeals} />
								<span class="slider"></span>
							</label>
						</div>
					</div>

					<label>Transportation Type</label>
					<select>
						<option>Select transportation type</option>
					</select>

					<label>Vehicle</label>
					<select>
						<option>Select vehicle</option>
					</select>
				</div>

				<div class="right">
					<label>Trip Length</label>
					<input type="date" bind:value={tripLength} class="input" />

					<label style="margin-top:18px;">Choose Travel Agent</label>
					<select bind:value={travelAgent}>
						<option value="">Select travel agent</option>
						<option value="agent1">Bali Holiday Tour</option>
						<option value="agent2">Sunrise Travel</option>
						<option value="agent3">Island Adventure</option>
					</select>

					<div class="right-header">
						<h4>Destinations</h4>
						<div class="action">
							<button class="small-btn">+</button>
							<button class="clear">× Clear Plan</button>
						</div>
					</div>

					<div class="destination-box">
						{#each destinations as item}
							<div class="destination-item">
								<div class="timeline">
									<span>Day {item.day}</span>
								</div>

								<div class="content">
									<div class="h-[60px] w-[60px] rounded-[10px] bg-gray-200"></div>
									<div>
										<strong>{item.name}</strong>
										<div class="see cursor-pointer hover:underline">See destination</div>
									</div>
								</div>

								<div class="date">{item.date}</div>
							</div>
						{/each}
					</div>

					<div class="submit-wrap">
						<button class="submit transition-colors hover:bg-blue-700">Submit Plan</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 48px;
		font-weight: 700;
		letter-spacing: -0.5px;
		margin-bottom: 16px;
		color: #111827;
	}

	.hero-subtitle {
		font-size: 18px;
		color: #6b7280;
		margin-bottom: 40px;
	}

	.hero-subtitle a {
		color: #2563eb;
		text-decoration: none;
		font-weight: 500;
	}

	.hero-section {
		background: #f8f9fb;
		padding: 40px 0 20px;
	}

	.hero-container {
		max-width: 1200px; /* Diubah jadi 1200px agar sejajar dengan card di bawahnya */
		margin: 0 auto;
	}

	/* CARD */
	.card {
		background: #ffffff;
		border-radius: 20px;
		padding: 50px;
		border: 1px solid #e5e7eb;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
	}

	.card-title {
		font-weight: 600;
		font-size: 18px;
		color: #111827;
	}

	.see-destination {
		font-size: 14px;
		font-weight: 500;
		color: #000000;
		cursor: pointer;
	}

	/* BODY GRID */
	.card-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		position: relative;
	}

	.card-body::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		height: 100%;
		width: 1px;
		background: #e5e7eb;
	}

	.left {
		padding-right: 40px;
	}

	.right {
		padding-left: 40px;
	}

	/* FORM ELEMENT */
	label {
		margin-top: 26px;
		display: block;
		font-weight: 600;
		font-size: 14px;
		color: #111827;
	}

	select,
	.input {
		width: 100%;
		padding: 14px 16px;
		margin-top: 8px;
		border-radius: 12px;
		border: 1px solid #e5e7eb;
		font-size: 14px;
		background: #fafafa;
		transition: 0.2s ease;
	}

	select:focus,
	.input:focus {
		outline: none;
		border-color: #2563eb;
		background: white;
	}

	/* ACCOMMODATION BOX */
	.accommodation {
		margin-top: 30px;
		border: 1px solid #e5e7eb;
		border-radius: 16px;
		padding: 28px;
		background: #fafafa;
	}

	.accommodation h4 {
		margin-bottom: 20px;
		font-weight: 600;
	}

	.row {
		display: flex;
		justify-content: space-between;
		margin-top: 18px;
		align-items: center;
		font-size: 14px;
	}

	/* COUNTER */
	.counter {
		display: flex;
		gap: 12px;
		align-items: center;
	}

	.counter button {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		border: 1px solid #e5e7eb;
		background: white;
		cursor: pointer;
		font-size: 16px;
	}

	.switch {
		position: relative;
		width: 42px;
		height: 22px;
	}

	.switch input {
		display: none;
	}

	.slider {
		position: absolute;
		inset: 0;
		background: #d1d5db;
		border-radius: 20px;
		transition: 0.3s;
	}

	.slider:before {
		content: '';
		position: absolute;
		width: 18px;
		height: 18px;
		left: 2px;
		top: 2px;
		background: white;
		border-radius: 50%;
		transition: 0.3s;
	}

	input:checked + .slider {
		background: #2563eb;
	}

	input:checked + .slider:before {
		transform: translateX(20px);
	}

	.right-header {
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.right-header h4 {
		font-weight: 600;
	}

	.small-btn,
	.clear {
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		padding: 8px 14px;
		background: white;
		font-size: 13px;
		cursor: pointer;
	}

	.destination-box {
		margin-top: 20px;
		border: 1px dashed #e5e7eb;
		border-radius: 16px;
		padding: 28px;
		background: #fcfcfc;
	}

	.destination-item {
		display: grid;
		grid-template-columns: 70px 1fr 120px;
		align-items: center;
		margin-bottom: 25px;
	}

	.timeline span {
		font-size: 13px;
		color: #6b7280;
	}

	.content {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.see {
		font-size: 13px;
		color: #2563eb;
		margin-top: 4px;
	}

	.date {
		background: #f3f4f6;
		padding: 8px 14px;
		border-radius: 20px;
		font-size: 13px;
		text-align: center;
	}

	/* SUBMIT */
	.submit-wrap {
		margin-top: 40px;
		text-align: right;
	}

	.submit {
		background: #2563eb;
		color: white;
		padding: 14px 28px;
		border-radius: 12px;
		border: none;
		font-weight: 500;
		cursor: pointer;
	}

	@media (max-width: 900px) {
		.card-body {
			grid-template-columns: 1fr;
		}

		.card-body::before {
			display: none;
		}

		.left,
		.right {
			padding: 0;
		}
	}
</style>
