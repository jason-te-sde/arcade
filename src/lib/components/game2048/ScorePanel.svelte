<script>
	let { score, best } = $props();
</script>

<dl>
	<div>
		<dt>Score</dt>
		<dd>{score}</dd>
	</div>
	<div>
		<dt>Best</dt>
		<dd>{best}</dd>
	</div>
</dl>

<style>
	dl {
		display: flex;
		gap: var(--space-2);
		margin: 0;
	}

	div {
		min-width: 5rem;
		padding: var(--space-1) var(--space-3);
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		text-align: center;
	}

	dt {
		font-size: var(--font-size-sm);
		color: var(--color-text-muted);
	}

	dd {
		margin: 0;
		font-size: var(--font-size-lg);
		font-weight: 700;
	}
</style>
