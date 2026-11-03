<script>
	import Board from '#lib/components/game2048/Board.svelte';
	import ScorePanel from '#lib/components/game2048/ScorePanel.svelte';
	import ArrowPad from '#lib/components/game2048/ArrowPad.svelte';
	import GameMessage from '#lib/components/game2048/GameMessage.svelte';
	import SeedForm from '#lib/components/game2048/SeedForm.svelte';
	import { game } from '#lib/game2048/game.svelte.js';

	const KEY_DIRECTIONS = {
		ArrowUp: 'up',
		ArrowDown: 'down',
		ArrowLeft: 'left',
		ArrowRight: 'right'
	};

	let announcement = $derived(
		game.status === 'over'
			? `Game over. Final score ${game.score}.`
			: game.status === 'won'
				? `You made 2048! Score ${game.score}.`
				: `Score ${game.score}.`
	);

	function handleKeydown(event) {
		const direction = KEY_DIRECTIONS[event.key];
		if (!direction || event.altKey || event.ctrlKey || event.metaKey) return;
		if (event.target instanceof Element && event.target.closest('input, textarea, select')) return;

		event.preventDefault();
		game.move(direction);
	}

	const move = (direction) => game.move(direction);
	const newGame = () => game.newGame();
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>2048 | Jason Te</title>
</svelte:head>

<h1>2048</h1>
<p>
	Use the arrow keys, or swipe on a phone, to slide every tile. Equal tiles merge into one. Reach 2048
	to win.
</p>

<div class="game">
	<div class="toolbar">
		<ScorePanel score={game.score} best={game.best} />
		<button class="button" onclick={newGame}>New game</button>
	</div>

	<div class="board-area">
		<Board tiles={game.tiles} onmove={move} />
		{#if game.status !== 'playing'}
			<GameMessage
				status={game.status}
				score={game.score}
				onnewgame={newGame}
				oncontinue={() => game.continue()}
			/>
		{/if}
	</div>

	<ArrowPad onmove={move} />
	<SeedForm seed={game.seed} onstart={(seed) => game.newGame(seed)} />
</div>

<p class="visually-hidden" aria-live="polite">{announcement}</p>

<style>
	.game {
		display: grid;
		gap: var(--space-3);
		max-width: 28rem;
	}

	.toolbar {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-2);
	}

	.board-area {
		position: relative;
	}
</style>
