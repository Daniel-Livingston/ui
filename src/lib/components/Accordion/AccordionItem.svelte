<script lang="ts">
	import AccordionBody from './AccordionBody.svelte';
	import AccordionHeader from './AccordionHeader.svelte';
	import type { AccordionItemProps } from './types';

	let { id, label, open = false, class: classname, ...props } = $props<AccordionItemProps>();

	// todo: fix this somehow
	let controller = $state<HTMLButtonElement | undefined>(undefined);
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
	:where(.accordion__item) {
		border-top: var(--_border);
	}

	:where(.accordion__item:last-of-type) {
		border-bottom: var(--_border);
	}
</style>
