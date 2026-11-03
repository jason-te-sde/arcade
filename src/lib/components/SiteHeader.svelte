<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const links = [
		{ route: '/', label: 'Home' },
		{ route: '/crossword', label: 'Crossword' },
		{ route: '/2048', label: '2048' },
		{ route: '/about', label: 'About' },
		{ route: '/contact', label: 'Contact' }
	];
</script>

<header>
	<a href={resolve('/')} class="site-title">Jason Te</a>
	<nav aria-label="Main">
		<ul>
			{#each links as link (link.route)}
				<li>
					<a
						href={resolve(link.route)}
						aria-current={page.route.id === link.route ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 5;
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-2) var(--space-3);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: var(--space-2);
	}

	nav a {
		display: flex;
		align-items: center;
		min-height: var(--tap-min);
		padding: 0 var(--space-3);
		color: var(--color-text);
		text-decoration: none;
		border-bottom: 3px solid transparent;
		border-radius: var(--radius);
		transition:
			color 0.2s,
			background-color 0.2s;
	}

	nav a[aria-current='page'] {
		color: var(--color-accent);
		font-weight: 600;
		border-bottom-color: var(--color-accent);
	}

	nav a:hover {
		color: var(--color-accent-dark);
		background-color: var(--color-surface);
	}

	.site-title {
		font-size: var(--font-size-lg);
		font-weight: 700;
		color: var(--color-text);
		text-decoration: none;
		display: flex;
		align-items: center;
		min-height: var(--tap-min);
	}

	.site-title::before {
		content: '▶' / '';
		color: var(--color-accent);
		margin-right: var(--space-2);
	}

	@media (max-width: 40rem) {
		nav {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: var(--color-bg);
			border-top: 1px solid var(--color-border);
		}

		ul {
			justify-content: space-around;
			gap: 0;
		}

		nav a {
			padding: 0 var(--space-2);
			font-size: var(--font-size-sm);
		}
	}
</style>
