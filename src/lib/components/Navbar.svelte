<script>
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import OnJourneyBrand from '$lib/components/brand/OnJourneyBrand.svelte';
	let isOpen = $state(false);
	let isLanguageModalOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function toggleLanguageModal() {
		isLanguageModalOpen = !isLanguageModalOpen;
	}

	let selectedLangId = $state('en');

	const suggestedLanguages = [
		{ id: 'en', name: 'English', flag: 'us' },
		{ id: 'id', name: 'Indonesia', flag: 'id' }
	];

	const allLanguages = [
		{ id: 'jp', name: '日本語', flag: 'jp' },
		{ id: 'cn', name: '中文', flag: 'cn' },
		{ id: 'kr', name: '한국어', flag: 'kr' },
		{ id: 'fr', name: 'français', flag: 'fr' },
		{ id: 'ru', name: 'Русский', flag: 'ru' },
		{ id: 'de', name: 'Deutsch', flag: 'de' },
		{ id: 'tr', name: 'Türkçe', flag: 'tr' },
		{ id: 'pt', name: 'Português', flag: 'pt' }
	];

	function selectLang(id) {
		selectedLangId = id;
		// Wait a small delay before closing if desired, but for now just keep it open or close it
		// isLanguageModalOpen = false;
	}

	let activeLang = $derived(
		[...suggestedLanguages, ...allLanguages].find((l) => l.id === selectedLangId) ||
			suggestedLanguages[0]
	);

</script>

<header class="w-full border-b border-gray-200 bg-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-14 py-2">
		<OnJourneyBrand href="/" />

		<button class="text-2xl md:hidden" onclick={toggleMenu}> ☰ </button>

		<div class={`nav-menu ${isOpen ? 'open' : ''} px-4 py-2 text-sm font-semibold`}>
			<a href="/" class="text-gray-800 hover:text-[#2097f5]"> Join as Travel Agent </a>

			<!-- Language toggler -->
			<button
				class="flex cursor-pointer items-center gap-1 transition-colors hover:text-blue-500"
				onclick={toggleLanguageModal}
			>
				<span>{activeLang.name} (IDR)</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ml-0.5 h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>

			<div class="ml-auto flex items-center gap-8">
				<a href="/login" class="text-sm text-[#2097f5]">Login</a>

				<a href="/auth/register" class="rounded-lg bg-[#2097f5] px-6 py-2 text-white">
					Sign Up
				</a>
			</div>
		</div>
	</div>
</header>

<!-- Language Modal Overlay -->
{#if isLanguageModalOpen}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
		role="button"
		tabindex="0"
		aria-label="Close language modal"
		onclick={(event) => event.target === event.currentTarget && toggleLanguageModal()}
		onkeydown={(event) => {
			if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
				toggleLanguageModal();
			}
		}}
	>
		<!-- Modal Content -->
		<div
			class="relative w-full max-w-[640px] rounded-[24px] bg-white px-8 md:px-10 py-8 shadow-2xl overflow-y-auto max-h-[90vh]"
			in:fly={{ y: 200, duration: 300 }}
			out:fly={{ y: 200, duration: 200 }}
		>
			<!-- Close Button -->
			<button
				class="absolute top-6 right-6 p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
				aria-label="Close language modal"
				onclick={toggleLanguageModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<h2 class="mb-6 text-xl font-semibold tracking-tight text-gray-900">
				Select Language
			</h2>

			<!-- Suggested Languages -->
			<div class="mb-8">
				<h3 class="mb-4 text-[16px] font-semibold text-gray-900">Suggested languages</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each suggestedLanguages as lang}
						<button
							class="flex w-full cursor-pointer items-center justify-between rounded-xl px-1 py-3.5 transition-colors focus:outline-none {selectedLangId === lang.id ? 'bg-[#f0f7ff] text-[#2097f5]' : 'hover:bg-gray-50 text-gray-700'}"
							onclick={() => selectLang(lang.id)}
						>
							<div class="flex items-center gap-3">
								<img
									src={`https://hatscripts.github.io/circle-flags/flags/${lang.flag}.svg`}
									alt={lang.id}
									class="h-6 w-6 shadow-sm rounded-full object-cover"
								/>
								<span class="text-[15px] {selectedLangId === lang.id ? 'font-medium' : ''}">{lang.name}</span>
							</div>
							{#if selectedLangId === lang.id}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-[18px] w-[18px]"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- All Languages -->
			<div>
				<h3 class="mb-4 text-[16px] font-semibold text-gray-900">All languages</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each allLanguages as lang}
						<button
							class="flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 transition-colors focus:outline-none {selectedLangId === lang.id ? 'bg-[#f0f7ff] text-[#2097f5]' : 'hover:bg-gray-50 text-gray-700'}"
							onclick={() => selectLang(lang.id)}
						>
							<div class="flex items-center gap-3">
								<img
									src={`https://hatscripts.github.io/circle-flags/flags/${lang.flag}.svg`}
									alt={lang.id}
									class="h-6 w-6 shadow-sm rounded-full object-cover"
								/>
								<span class="text-[15px] {selectedLangId === lang.id ? 'font-medium' : ''}">{lang.name}</span>
							</div>
							{#if selectedLangId === lang.id}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-[18px] w-[18px]"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.nav-menu {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	@media (min-width: 768px) {
		.nav-menu {
			display: flex !important;
		}
	}

	@media (max-width: 767px) {
		.nav-menu {
			display: none;
			flex-direction: column;
			align-items: flex-start;
			gap: 14px;
			margin-top: 16px;
			width: 100%;
		}

		.nav-menu.open {
			display: flex;
		}

		.nav-menu button {
			width: 100%;
		}
	}
</style>
