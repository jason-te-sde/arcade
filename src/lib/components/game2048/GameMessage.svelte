<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { status, score, onnewgame, oncontinue } = $props();

	let primary;

	// Move keyboard focus to the main action so the next step is one key away
	onMount(() => primary.focus());
</script>

<div class="message" transition:fade={{ duration: 200 }}>
	<h2>{status === 'won' ? 'You made 2048!' : 'Game over'}</h2>
	<p>Score: {score}</p>
	<div class="actions">
		{#if status === 'won'}
			<button bind:this={primary} class="button" onclick={oncontinue}>Keep playing</button>
			<button class="button secondary" onclick={onnewgame}>New game</button>
		{:else}
			<button bind:this={primary} class="button" onclick={onnewgame}>Try again</button>
		{/if}
	</div>
</div>

<style>
	.message {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
		justify-items: center;
		gap: var(--space-2);
		padding: var(--space-3);
		background-color: color-mix(in srgb, var(--color-bg) 92%, transparent);
		border-radius: var(--radius);
		text-align: center;
	}

	h2,
	p {
		margin: 0;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-2);
	}
</style>
