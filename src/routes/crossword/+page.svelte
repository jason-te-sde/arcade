<script>
	import CrosswordGrid from '#lib/components/crossword/CrosswordGrid.svelte';
	import ClueList from '#lib/components/crossword/ClueList.svelte';
	import SolutionReveal from '#lib/components/crossword/SolutionReveal.svelte';
	import { cells, size, clues, answers } from '#lib/crossword/puzzle.js';

	const openCells = cells.filter((cell) => !cell.block);

	let entries = $state({});
	let filled = $derived(openCells.filter((cell) => entries[cell.id]).length);
	let solved = $derived(openCells.every((cell) => entries[cell.id] === cell.letter));

	function setEntry(id, value) {
		entries[id] = value.slice(-1).toUpperCase();
	}
</script>

<svelte:head>
	<title>Crossword | Jason Te</title>
</svelte:head>

<h1>Mini Crossword</h1>
<p>Click or tab into a square and type a letter.</p>

<div class="puzzle">
	<CrosswordGrid {cells} {size} {entries} onentry={setEntry} />
	<div class="clues">
		<ClueList title="Across" clues={clues.across} />
		<ClueList title="Down" clues={clues.down} />
	</div>
</div>

<div class="status">
	<p class:solved aria-live="polite">
		{solved ? 'Solved! Nice work.' : `${filled} of ${openCells.length} squares filled.`}
	</p>
	<button class="button secondary" onclick={() => (entries = {})}>Clear the grid</button>
</div>

<SolutionReveal {answers} />

<style>
	.puzzle {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		align-items: flex-start;
	}

	.clues {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
	}

	.status {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}

	.status p {
		margin: 0;
	}

	.solved {
		color: var(--color-accent-dark);
		font-weight: 600;
	}
</style>
