<script>
	import { fade, scale } from 'svelte/transition';

	let { isOpen = false } = $props();

	function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<!-- Backdrop -->
	<div
		transition:fade={{ duration: 200 }}
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
		onclick={close}
		role="presentation"
	>
		<!-- Modal -->
		<div
			transition:scale={{ duration: 200, start: 0.95 }}
			class="relative w-full max-w-sm rounded-2xl bg-white px-6 pt-6 pb-8 shadow-xl"
			onclick={(event) => event.stopPropagation()}
			onkeydown={(event) => event.key === 'Escape' && close()}
			role="dialog"
			tabindex="0"
		>
			<!-- Close Button -->
			<button
				aria-label="Close dialog"
				class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
				onclick={close}
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Illustration -->
			<div class="mb-6 flex justify-center">
				<img src="/img/mobile-only.png" alt="Mobile Only" class="h-48 w-auto object-contain" />
			</div>

			<!-- Text -->
			<div class="mb-6 text-center">
				<p class="mb-2 text-base font-semibold text-gray-900">
					This feature is only available on the mobile app.
				</p>
				<p class="text-sm text-gray-500">Download On-Journey app from</p>
			</div>

			<!-- Store Buttons -->
			<div class="flex items-center justify-center gap-3">
				<a
					href="https://play.google.com"
					target="_blank"
					rel="noreferrer"
					class="transition hover:opacity-80"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
						alt="Google Play"
						class="h-11 w-auto"
					/>
				</a>
				<a
					href="https://www.apple.com/app-store"
					target="_blank"
					rel="noreferrer"
					class="transition hover:opacity-80"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
						alt="App Store"
						class="h-11 w-auto"
					/>
				</a>
			</div>
		</div>
	</div>
{/if}
