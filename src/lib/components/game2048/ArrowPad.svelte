<script>
	let { onmove } = $props();

	const keys = [
		{ direction: 'up', symbol: '↑' },
		{ direction: 'left', symbol: '←' },
		{ direction: 'down', symbol: '↓' },
		{ direction: 'right', symbol: '→' }
	];
</script>

<div class="pad" role="group" aria-label="Move tiles">
	{#each keys as key (key.direction)}
		<button
			class="button secondary"
			style:grid-area={key.direction}
			aria-label="Move {key.direction}"
			onclick={() => onmove(key.direction)}
		>
			<span aria-hidden="true">{key.symbol}</span>
		</button>
	{/each}
</div>

<style>
	.pad {
		display: grid;
		grid-template-areas:
			'. up .'
			'left down right';
		grid-template-columns: repeat(3, 4rem);
		gap: var(--space-2);
		justify-content: center;
	}

	button {
		min-height: 3.5rem;
		font-size: var(--font-size-xl);
	}

	/* Only touch devices get the on-screen keys; everyone else has a keyboard */
	@media (hover: hover) and (pointer: fine) {
		.pad {
			display: none;
		}
	}
</style>
