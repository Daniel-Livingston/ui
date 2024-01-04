<script lang="ts">
	import './Accordion.css';
	import type { AccordionProps } from './types';
	import { setContext } from 'svelte';
	import classNames from 'classnames';

	let { headingLevel = 2, class: classname, ...props } = $props<AccordionProps>();

	setContext('accordion-heading-level', headingLevel);
</script>

<div class={classNames('accordion', classname)} {...props}>
	<slot />
</div>
