<script>
	import { resolve } from '$app/paths';
	import avatar from '#lib/assets/avatar.jpg';
	import { game } from '#lib/game2048/game.svelte.js';
</script>

<svelte:head>
	<title>Home | Jason Te</title>
</svelte:head>

<h1>Welcome to The Arcade</h1>
<img src={avatar} alt="Portrait of Jason Te" width="160" height="160" />
<p>
	Hi, I'm Jason Te, a graduate student in Computer Science at Northeastern University. This site is
	my arcade: over the semester it will grow to hold four small games. So far there is a hand-built
	mini crossword and a game of 2048. Have a look around, and feel free to reach out.
</p>

<section>
	<h2>Play Today's Puzzle</h2>
	<p>Try my 5×5 mini crossword: fill in the grid and check your answers.</p>
	<p><a href={resolve('/crossword')}>Start the crossword</a></p>
</section>

<section>
	<h2>Play 2048</h2>
	<p>
		Slide the tiles and merge equal numbers until you reach 2048.
		{#if game.best > 0}
			Your best score so far is {game.best}.
		{/if}
	</p>
	<p><a href={resolve('/2048')}>Play 2048</a></p>
</section>

<style>
	img {
		border-radius: 50%;
	}
</style>
