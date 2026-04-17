<script>
	let isExpanded = false;

	const shortText =
		'Bali is a popular island and tourist destination in the world. This island is known for its various of nature and cultural tourism, making Bali a dream for everyone. PT Bali Sundaram Travel is here to provide a wholehearted service for those who want to visit Bali.';

	const fullText =
		'Bali is a popular island and tourist destination in the world. This island is known for its various of nature and cultural tourism, making Bali a dream for everyone. PT Bali Sundaram Travel is here to provide a wholehearted service for those who want to visit Bali. With years of experience in tour and travel service, Bali destination management has been a key for our focus in completing customers satisfaction. Our experienced guides, comfortable transportation and best accommodation are the perfect combination for creating a memorable holiday experience for you. Bali is not only famous for its beaches, but also for its culture, arts, and traditions that are deeply rooted in our daily lives.';

	function toggleReadMore() {
		isExpanded = !isExpanded;
	}
</script>

<section class="mb-6">
	<h3 class="mb-2 text-lg font-semibold text-gray-900">
		Description</h3>
	<p class="text-1sm leading-relaxed text-gray-900">
		{isExpanded ? fullText : shortText}
		<button
			on:click={toggleReadMore}
			class="font-inherit ml-1 cursor-pointer border-none bg-transparent p-0 text-blue-500 underline transition-colors hover:text-blue-600"
		>
			{isExpanded ? 'read less' : 'read more'}
		</button>
	</p>
</section>
