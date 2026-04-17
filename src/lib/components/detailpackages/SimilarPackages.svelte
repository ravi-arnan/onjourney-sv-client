<!-- SimilarPackages.svelte -->
<script>
	let { similarPackages } = $props();

	const defaultPackages = [
		{
			name: 'East Bali Tour',
			desc: 'Include Attractions, Transports',
			rating: 4.5,
			reviews: 100,
			price: 'Rp 2,000,000',
			days: 12,
			img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80'
		},
		{
			name: 'Nusa Penida Multida...',
			desc: 'Include Foods, Hotels, Transports',
			rating: 4.5,
			reviews: 100,
			price: 'Rp 2,000,000',
			days: 12,
			img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=300&q=80'
		},
		{
			name: '2D1N Nusa Penida,...',
			desc: 'Include Foods, Hotels, Transports',
			rating: 4.6,
			reviews: 100,
			price: 'Rp 2,000,000',
			days: 12,
			img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=300&q=80'
		},
		{
			name: 'Rent Luxury Car - Lamborghini Gallardo',
			desc: 'Include Transports',
			rating: 4.8,
			reviews: 100,
			price: 'Rp 3,500,000',
			days: 4,
			img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&q=80'
		}
	];

	const items = $derived(similarPackages ?? defaultPackages);
</script>

<section class="mb-8">
	<div class="mb-9 border-t border-gray-200"></div>
	<h2 class="mb-6 text-[40px] font-semibold leading-tight text-gray-900">
		Other Travel Package from Central Bali Trans
	</h2>
	<div class="other-packages-grid mb-8">
		{#each items as pkg (`${pkg.name}-${pkg.price}`)}
			<div
				class="cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white"
			>
				<div class="h-[200px] overflow-hidden bg-gray-100">
					<img src={pkg.img} alt={pkg.name} class="h-full w-full object-cover" />
				</div>
				<div class="p-3">
					<div class="mb-1 text-[15px] font-semibold leading-snug text-gray-900">{pkg.name}</div>
					<div class="mb-2 text-xs leading-tight text-gray-500">No facility provided.</div>
					<div class="mb-1.5 flex items-center gap-1 text-xs">
						<svg class="h-2.5 w-2.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<span class="text-gray-500">0</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.other-packages-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.other-packages-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.other-packages-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
