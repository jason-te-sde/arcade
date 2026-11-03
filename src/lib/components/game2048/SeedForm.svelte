<script>
	let { seed, onstart } = $props();

	let value = $state('');
	let error = $state('');

	function submit(event) {
		event.preventDefault();
		const number = Number(value);
		if (value.trim() === '' || !Number.isSafeInteger(number) || number < 0) {
			error = 'Enter a whole number, like 42.';
			return;
		}
		error = '';
		onstart(number);
	}
</script>

<form onsubmit={submit}>
	<label for="seed">Seed</label>
	<div class="row">
		<input id="seed" inputmode="numeric" autocomplete="off" bind:value aria-describedby="seed-help" />
		<button class="button secondary">Start seeded game</button>
	</div>
	<p id="seed-help" class:error>
		{#if error}
			{error}
		{:else if seed !== null}
			Playing seed {seed}. The same seed always deals the same tiles.
		{:else}
			Enter a seed to replay the exact same game.
		{/if}
	</p>
</form>

<style>
	form {
		display: grid;
		gap: var(--space-1);
	}

	label {
		font-weight: 600;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	input {
		width: 8rem;
		min-height: var(--tap-min);
		padding: 0 var(--space-2);
		border: 1px solid var(--color-text-muted);
		border-radius: var(--radius);
		font: inherit;
	}

	p {
		margin: 0;
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	.error {
		color: #b42318;
	}
</style>
