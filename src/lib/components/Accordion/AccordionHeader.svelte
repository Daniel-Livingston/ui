<script lang="ts">
	import type { AccordionHeaderProps } from './types';
	import { getContext } from 'svelte';

	let { open, ref, ...props } = $props<AccordionHeaderProps>();

	const headingLevel = getContext<1 | 2 | 3 | 4 | 5 | 6>('accordion-heading-level');
</script>

<svelte:element this={`h${headingLevel}`} class="accordion__header">
	<button
		class="accordion__button"
		type="button"
		bind:this={ref}
		{...props}
		on:click={() => (open = !open)}
	>
		<slot />
	</button>
</svelte:element>
