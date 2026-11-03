<script>
	let { cells, size, entries, onentry } = $props();

	const label = (cell) =>
		`Row ${cell.row + 1}, column ${cell.col + 1}: ` +
		[cell.across && `${cell.across} Across`, cell.down && `${cell.down} Down`]
			.filter(Boolean)
			.join(', ');
</script>

<div class="grid" style:--size={size}>
	{#each cells as cell (cell.id)}
		{#if cell.block}
			<div class="cell block"></div>
		{:else}
			<div class="cell">
				{#if cell.number}
					<span class="number" aria-hidden="true">{cell.number}</span>
				{/if}
				<input
					type="text"
					maxlength="1"
					autocomplete="off"
					autocapitalize="characters"
					spellcheck="false"
					aria-label={label(cell)}
					value={entries[cell.id] ?? ''}
					onfocus={(event) => event.currentTarget.select()}
					oninput={(event) => onentry(cell.id, event.currentTarget.value)}
				/>
			</div>
		{/if}
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--size), var(--cell-size));
		gap: 2px;
		background-color: var(--color-text);
		border: 2px solid var(--color-text);
		width: fit-content;
	}

	.cell {
		position: relative;
		height: var(--cell-size);
		background-color: var(--color-bg);
	}

	.block {
		background-color: var(--color-text);
	}

	input {
		width: 100%;
		height: 100%;
		border: none;
		padding: 0;
		background-color: transparent;
		text-align: center;
		font-family: inherit;
		font-size: var(--font-size-lg);
		text-transform: uppercase;
		color: var(--color-text);
	}

	input:focus-visible {
		outline: 3px solid var(--color-accent);
		outline-offset: -3px;
		border-radius: 0;
		background-color: var(--color-surface);
	}

	.number {
		position: absolute;
		top: 2px;
		left: 4px;
		font-size: var(--font-size-xs);
		color: var(--color-text-muted);
		pointer-events: none;
	}
</style>
