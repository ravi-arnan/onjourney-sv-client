<script>
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';

	let visible = $state(true);
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			visible = currentScrollY < lastScrollY || currentScrollY < 10;
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const navItems = [
		{ href: '/', label: 'Home', short: 'H' },
		{ href: '/explore', label: 'Explore', short: 'E' },
		{ href: '/saved', label: 'Saved', short: 'S' },
		{ href: '/booking', label: 'Booking', short: 'B' },
		{ href: '/auth/login', label: 'Account', short: 'A' }
	];
</script>

<nav class="bottom-nav" class:hidden={!visible}>
	{#each navItems as item (item.href)}
		<a
			href={resolve(item.href)}
			class="nav-item"
			class:active={$page.url.pathname === resolve(item.href)}
		>
			<span class="icon-circle">{item.short}</span>
			<span>{item.label}</span>
		</a>
	{/each}
</nav>

<style>
	.bottom-nav {
		display: none;
	}

	@media (max-width: 768px) {
		.bottom-nav {
			display: flex;
			position: fixed;
			bottom: 14px;
			left: 20px;
			right: 20px;
			height: 80px;
			background: #fff;
			border-top: 1px solid #eee;
			z-index: 100;
			border-radius: 18px;
			box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
			transform: translateY(0);
			transition: transform 0.3s ease;
		}

		.bottom-nav.hidden {
			transform: translateY(100%);
		}

		.nav-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 3px;
			text-decoration: none;
			color: #aaa;
			font-size: 11px;
			font-weight: 500;
			transition: color 0.2s;
		}

		.nav-item.active {
			color: #3f9ef0;
		}

		.nav-item:hover {
			color: #3f9ef0;
		}

		.icon-circle {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 22px;
			height: 22px;
			border-radius: 9999px;
			border: 1px solid currentColor;
			font-size: 10px;
			line-height: 1;
		}
	}
</style>
