<script>
	let { title, link = null, meta, points = [] } = $props();
</script>

<article>
	<h3>
		{#if link}
			<a href={link}>{title.name}</a> · {title.detail}
		{:else}
			{title.name} · {title.detail}
		{/if}
	</h3>
	<p>{meta}</p>
	{#if points.length > 0}
		<ul>
			{#each points as point (point)}
				<li>{point}</li>
			{/each}
		</ul>
	{/if}
</article>
