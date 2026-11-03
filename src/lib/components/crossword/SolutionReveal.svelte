<script>
	import { slide } from 'svelte/transition';

	let { answers } = $props();
	let open = $state(false);
</script>

<section>
	<h2>Solution</h2>
	<button class="button secondary" aria-expanded={open} onclick={() => (open = !open)}>
		{open ? 'Hide' : 'Show'} the solution
	</button>
	{#if open}
		<ul transition:slide={{ duration: 200 }}>
			{#each answers as answer (answer.label)}
				<li>{answer.label}: {answer.word}</li>
			{/each}
		</ul>
	{/if}
</section>
