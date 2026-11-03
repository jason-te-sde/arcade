# The Arcade

My CS5610 arcade, rebuilt in SvelteKit (Svelte 5). It has a mini crossword ported from Project 1 and a game of 2048 whose rules come from my own npm package, [`@jason-te-sde/arcade-core`](https://www.npmjs.com/package/@jason-te-sde/arcade-core).

- Live site: https://jason-te-sde.github.io/arcade/
- Game logic package: https://github.com/jason-te-sde/arcade-core

## Run it locally

```bash
npm install
npm run dev
```

`npm run build` writes a static site to `build/`. Pushing to `main` deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Where things live

| Path | What it is |
| --- | --- |
| `src/routes/` | One folder per page: home, `crossword`, `2048`, `about`, `contact` |
| `src/lib/components/` | Site header and footer, plus `crossword/` and `game2048/` components |
| `src/lib/game2048/game.svelte.js` | Shared 2048 state (board, score, best score, seed), saved to `localStorage` |
| `src/lib/crossword/puzzle.js` | Crossword answers and clues; clue numbers are worked out from the grid |
| `src/lib/styles/global.css` | Colour ramp, type scale, spacing scale and the 2048 tile colours |

The app never implements the 2048 rules itself: moving, merging, spawning and game-over checks all come from `@jason-te-sde/arcade-core`.

## Features

- 2048 with score, best score, win at 2048 (with "Keep playing"), and game over
- Arrow keys on desktop; on-screen arrows and swipe on phones
- Saves the game and best score in `localStorage`
- Seeded games: the same seed always deals the same tiles
- Score and game-over changes are announced through an `aria-live` region
