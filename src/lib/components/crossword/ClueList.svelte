<script>
	let { title, clues } = $props();
</script>

<section>
	<h2>{title}</h2>
	<ol>
		{#each Object.entries(clues) as [number, text] (number)}
			<li value={number}>{text}</li>
		{/each}
	</ol>
</section>

<style>
	h2 {
		margin-top: 0;
	}
</style>
