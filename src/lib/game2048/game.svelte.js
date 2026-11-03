import {
	canMove,
	createBoard,
	createRng,
	hasMoves,
	slide,
	spawn
} from '@jason-te-sde/arcade-core';

const STORAGE_KEY = 'arcade-2048';
const WINNING_TILE = 2048;
const SIZE = 4;

function isValidBoard(board) {
	return (
		Array.isArray(board) &&
		board.length === SIZE &&
		board.every((row) => Array.isArray(row) && row.length === SIZE && row.every(Number.isInteger))
	);
}

function readSaved() {
	try {
		const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
		return saved && isValidBoard(saved.board) ? saved : null;
	} catch {
		return null;
	}
}

/** One shared 2048 game, so any page can read the score and best score. */
class Game2048 {
	board = $state.raw(createBoard(SIZE));
	score = $state(0);
	best = $state(0);
	seed = $state(null);
	keepPlaying = $state(false);

	tiles = $derived(
		this.board
			.flatMap((row, r) =>
				row.map((value, c) => ({ key: `${r}-${c}-${value}`, value, row: r, col: c }))
			)
			.filter((tile) => tile.value !== 0)
	);
	won = $derived(this.tiles.some((tile) => tile.value >= WINNING_TILE));
	over = $derived(this.tiles.length > 0 && !hasMoves(this.board));
	status = $derived(this.over ? 'over' : this.won && !this.keepPlaying ? 'won' : 'playing');

	#rng = Math.random;
	#draws = 0;

	// Counting draws lets a seeded game resume from the same point after a reload
	#draw = () => {
		this.#draws++;
		return this.#rng();
	};

	load() {
		if (this.tiles.length > 0) return;

		const saved = readSaved();
		if (!saved) {
			this.newGame();
			return;
		}

		this.board = saved.board;
		this.score = saved.score ?? 0;
		this.best = saved.best ?? 0;
		this.keepPlaying = saved.keepPlaying ?? false;
		this.#useSeed(saved.seed ?? null);
		for (let i = 0; i < (saved.draws ?? 0); i++) this.#draw();

		if (this.tiles.length === 0) this.newGame(this.seed);
	}

	newGame(seed = null) {
		this.#useSeed(seed);
		this.board = spawn(spawn(createBoard(SIZE), this.#draw), this.#draw);
		this.score = 0;
		this.keepPlaying = false;
		this.#save();
	}

	move(direction) {
		if (this.status !== 'playing' || !canMove(this.board, direction)) return;

		const { board, points } = slide(this.board, direction);
		this.board = spawn(board, this.#draw);
		this.score += points;
		this.best = Math.max(this.best, this.score);
		this.#save();
	}

	continue() {
		this.keepPlaying = true;
		this.#save();
	}

	#useSeed(seed) {
		this.seed = seed;
		this.#rng = seed === null ? Math.random : createRng(seed);
		this.#draws = 0;
	}

	#save() {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({
					board: this.board,
					score: this.score,
					best: this.best,
					seed: this.seed,
					draws: this.#draws,
					keepPlaying: this.keepPlaying
				})
			);
		} catch {
			// Storage can be full or blocked (private mode); the game still works without it
		}
	}
}

export const game = new Game2048();
