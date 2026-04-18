<!-- PackageDescription.svelte -->
<section class="mb-7">
	<h2 class="mb-4 text-[32px] leading-tight font-semibold text-gray-900">Package Description</h2>
	<div class="text-[16px] leading-relaxed text-gray-700">
		<p class="mb-2 font-medium text-gray-900">East Bali Tour</p>
		<p class="mb-1.5 font-medium text-gray-800">(Place)</p>
		<div class="mb-3 space-y-1 pl-3">
			{#each ['barong dance (09:30am)', 'batuan temple', 'tegenungan waterfall', 'elephant cave', 'monkey forest', 'tegalalang rice terrace'] as item (item)}
				<p>- {item}</p>
			{/each}
		</div>
		<p class="mb-1.5 font-medium text-gray-800">(Park)</p>
		<div class="mb-3 space-y-1 pl-3">
			{#each ['bali zoo', 'bali safari', 'bali bird park', 'butterfly park'] as item (item)}
				<p>- {item}</p>
			{/each}
		</div>
		<p class="mb-1.5 font-medium text-gray-800">(Activity)</p>
		<div class="mb-3 space-y-1 pl-3">
			{#each ['bali swing', 'rafting', 'atv', 'tubbing'] as item (item)}
				<p>- {item}</p>
			{/each}
		</div>
		<p class="mb-1.5 font-medium text-gray-800">(Shopping, Souvenir)</p>
		<div class="mb-3 space-y-1 pl-3">
			{#each ['Silver & gold place', 'Batik colection', 'Wood carving', 'Luwak coffee', 'Painting'] as item (item)}
				<p>- {item}</p>
			{/each}
		</div>
		<p class="mt-4 text-[15px] text-gray-500">
			(This package can be fill by 2 - 4 persons at same time)
		</p>
	</div>
</section>
