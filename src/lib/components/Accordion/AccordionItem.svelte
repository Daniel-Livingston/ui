<script lang="ts">
	import type { AccordionItemProps } from './types';
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';

	let { id, label, open = false, class: classname, ...props } = $props<AccordionItemProps>();
</script>

<div class="accordion-item {classname}" class:open {...props}>
	<AccordionHeader onclick={() => (open = !open)} aria-controls="{id}-body" aria-expanded={open}>
		{label}
	</AccordionHeader>
	<AccordionBody id="{id}-body" {open}>
		<slot />
	</AccordionBody>
</div>
