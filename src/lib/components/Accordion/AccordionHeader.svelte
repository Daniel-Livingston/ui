<script lang="ts">
	import type { AccordionHeaderProps } from './types';
	import { getContext } from 'svelte';
	import { ChevronIcon } from '$lib/icons';

	let { open, ref, ...props } = $props<AccordionHeaderProps>();

	const headingLevel = getContext<1 | 2 | 3 | 4 | 5 | 6>('accordion-heading-level');
</script>

<svelte:element this={`h${headingLevel}`} class="accordion__header" class:open>
	<button
		class="accordion__button"
		type="button"
		bind:this={ref}
		{...props}
		on:click={() => (open = !open)}
	>
		<span><slot /></span>
		<ChevronIcon class="accordion__button-icon" direction={open ? 'up' : 'down'} />
	</button>
</svelte:element>
