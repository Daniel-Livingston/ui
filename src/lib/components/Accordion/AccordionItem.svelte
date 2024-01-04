<script lang="ts">
	import type { AccordionItemProps } from './types';
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';

	let { id, label, open = false, class: classname, ...props } = $props<AccordionItemProps>();

	let controller: HTMLButtonElement;
</script>

<div class="accordion__item {classname}" {...props}>
	<AccordionHeader bind:ref={controller} bind:open>
		{label}
	</AccordionHeader>
	<AccordionBody id="{id}-body" {controller} {open}>
		<slot />
	</AccordionBody>
</div>
