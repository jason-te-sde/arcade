<script>
	import Tile from './Tile.svelte';

	let { tiles, size = 4, onmove } = $props();

	const SWIPE_MIN = 30;
	const slots = Array.from({ length: size * size }, (_, i) => ({
		row: Math.floor(i / size) + 1,
		col: (i % size) + 1
	}));

	let touchStart = null;

	function handleTouchStart(event) {
		const touch = event.changedTouches[0];
		touchStart = { x: touch.clientX, y: touch.clientY };
	}

	function handleTouchEnd(event) {
		if (!touchStart) return;
		const touch = event.changedTouches[0];
		const dx = touch.clientX - touchStart.x;
		const dy = touch.clientY - touchStart.y;
		touchStart = null;

		if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE_MIN) return;
		if (Math.abs(dx) > Math.abs(dy)) {
			onmove(dx > 0 ? 'right' : 'left');
		} else {
			onmove(dy > 0 ? 'down' : 'up');
		}
	}
</script>

<div
	class="board"
	role="group"
	aria-label="2048 board"
	style:--size={size}
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	{#each slots as slot (`${slot.row}-${slot.col}`)}
		<div class="slot" style:grid-row={slot.row} style:grid-column={slot.col}></div>
	{/each}
	{#each tiles as tile (tile.key)}
		<Tile value={tile.value} row={tile.row} col={tile.col} />
	{/each}
</div>

<style>
	.board {
		container-type: inline-size;
		display: grid;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		gap: var(--space-2);
		padding: var(--space-2);
		width: 100%;
		aspect-ratio: 1;
		background-color: var(--board-bg);
		border-radius: var(--radius);
		touch-action: none;
		user-select: none;
	}

	.slot {
		background-color: var(--board-cell);
		border-radius: 4px;
	}
</style>
