<script lang="ts">
	import './Accordion.css';
	import type { AccordionProps } from './types';
	import { setContext } from 'svelte';

	let { class: classname, headingLevel = 2, ...props } = $props<AccordionProps>();

	setContext('accordion-heading-level', headingLevel);
</script>

<div class="accordion {classname}" {...props}>
	<slot />
</div>
