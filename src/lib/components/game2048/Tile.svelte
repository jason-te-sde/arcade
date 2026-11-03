<script>
	import { scale } from 'svelte/transition';
	import { prefersReducedMotion } from 'svelte/motion';

	let { value, row, col } = $props();

	let color = $derived(value <= 2048 ? value : 'super');
</script>

<div
	class="tile"
	class:digits-3={value >= 100}
	class:digits-4={value >= 1000}
	class:digits-5={value >= 10000}
	style:grid-row={row + 1}
	style:grid-column={col + 1}
	style:background-color="var(--tile-{color}-bg)"
	style:color="var(--tile-{color}-fg)"
	in:scale={{ duration: prefersReducedMotion.current ? 0 : 150, start: 0.5 }}
>
	{value}
</div>

<style>
	.tile {
		display: grid;
		place-items: center;
		border-radius: var(--radius-sm);
		font-weight: 700;
		font-size: 11cqi;
		line-height: 1;
	}

	.digits-3 {
		font-size: 9cqi;
	}

	.digits-4 {
		font-size: 7cqi;
	}

	.digits-5 {
		font-size: 5.5cqi;
	}
</style>
