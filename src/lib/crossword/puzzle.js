// null marks a black square
const solution = [
	['S', 'E', 'A', null, null],
	['P', 'A', 'L', 'M', null],
	['A', 'C', 'T', 'O', 'R'],
	[null, 'H', 'E', 'R', 'O'],
	[null, null, 'R', 'E', 'D']
];

export const size = solution.length;

export const clues = {
	across: {
		1: 'Large body of salt water',
		4: 'Tropical tree with fronds',
		6: 'Oscar nominee, often',
		8: 'Protagonist of a story',
		9: 'Color of a stop sign'
	},
	down: {
		1: 'Place for a massage and a facial',
		2: 'Apiece',
		3: 'Change, as a dress',
		5: 'Opposite of less',
		7: 'Fishing pole'
	}
};

const isOpen = (row, col) => solution[row]?.[col] != null;

/**
 * Number the grid the standard way: a square gets the next number when it
 * starts an across or a down answer. Each open square also remembers which
 * across and down answers it belongs to.
 */
function buildCells() {
	const cells = [];
	const byId = {};
	let next = 1;

	solution.forEach((letters, row) =>
		letters.forEach((letter, col) => {
			const id = `${row}-${col}`;
			if (letter === null) {
				cells.push({ id, block: true });
				return;
			}

			const startsAcross = !isOpen(row, col - 1) && isOpen(row, col + 1);
			const startsDown = !isOpen(row - 1, col) && isOpen(row + 1, col);
			const number = startsAcross || startsDown ? next++ : null;

			const cell = {
				id,
				block: false,
				row,
				col,
				letter,
				number,
				across: startsAcross ? number : byId[`${row}-${col - 1}`]?.across,
				down: startsDown ? number : byId[`${row - 1}-${col}`]?.down
			};
			byId[id] = cell;
			cells.push(cell);
		})
	);

	return cells;
}

export const cells = buildCells();

const wordFor = (direction, number) =>
	cells
		.filter((cell) => cell[direction] === number)
		.map((cell) => cell.letter)
		.join('');

export const answers = ['across', 'down'].flatMap((direction) =>
	Object.keys(clues[direction]).map((number) => ({
		label: `${number} ${direction === 'across' ? 'Across' : 'Down'}`,
		word: wordFor(direction, Number(number))
	}))
);
