<script>
	import '#lib/styles/global.css';
	import { onMount } from 'svelte';
	import favicon from '#lib/assets/favicon.svg';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import { game } from '#lib/game2048/game.svelte.js';

	let { children } = $props();

	// Restore the saved 2048 game on any page, so the home page can show the best score too
	onMount(() => game.load());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#main">Skip to main content</a>
<SiteHeader />
<main id="main">
	{@render children()}
</main>
<SiteFooter />

<style>
	main {
		max-width: var(--max-width-page);
		margin: 0 auto;
		padding: var(--space-4) var(--space-3);
	}

	.skip-link {
		position: absolute;
		top: var(--space-2);
		left: var(--space-3);
		z-index: 10;
		padding: var(--space-2) var(--space-3);
		background-color: var(--color-bg);
		color: var(--color-accent-dark);
		transform: translateY(-200%);
	}

	.skip-link:focus {
		transform: none;
	}
</style>
