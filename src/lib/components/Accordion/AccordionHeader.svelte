<script lang="ts">
	import type { AccordionHeaderProps } from './types';
	import { getContext } from 'svelte';

	let { ...props } = $props<AccordionHeaderProps>();

	const headingLevel = getContext<1 | 2 | 3 | 4 | 5 | 6>('accordion-heading-level');
</script>

<svelte:element this={`h${headingLevel}`} class="accordion-header">
	<button class="accordion-button" type="button" {...props}>
		<slot />
	</button>
</svelte:element>
