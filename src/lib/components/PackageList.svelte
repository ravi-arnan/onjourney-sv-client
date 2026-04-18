<script lang="ts">
	import PackageCard from './PackageCard.svelte';
	import type { Writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	interface PackageItem {
		id: string;
		[key: string]: unknown;
	}

	interface Props {
		packages: Writable<PackageItem[]>;
		onToggleLike: (pkg: PackageItem) => void;
	}

	let { packages, onToggleLike }: Props = $props();
</script>

<section class="mb-6">
	<h3 class="mb-4 text-sm font-bold text-gray-900">Packages</h3>
	<div class="grid grid-cols-3 gap-4">
		{#each $packages as pkg (pkg.id)}
			<PackageCard {pkg} {onToggleLike} />
		{/each}
	</div>

	<div class="mt-6 flex justify-center">
		<a
			href={resolve(`/travel-agent/${$page.params.slug}/packages`)}
			class="text-2sm cursor-pointer gap-1 rounded-lg border-none bg-[#2097f5] px-4 py-2.5 font-medium text-white transition-colors hover:bg-[#2384cf]"
		>
			Our Packages
		</a>
	</div>
</section>
