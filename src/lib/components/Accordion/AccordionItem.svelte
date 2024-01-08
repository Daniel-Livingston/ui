<script lang="ts">
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';
	import type { AccordionItemProps } from './types';

	let { id, label, open = false, class: classname, ...props } = $props<AccordionItemProps>();

	// todo: fix this somehow
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

<style>
	.accordion__item {
		border: var(--accordion-item-border-width) solid var(--accordion-item-border-color);
		border-left: none;
		border-right: none;
	}

	:global(.accordion__item) + .accordion__item {
		border-top: none;
	}
</style>
