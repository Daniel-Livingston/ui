<script lang="ts">
	import { setContext } from 'svelte';
	import classNames from 'classnames';

	import type { AccordionProps } from './types';

	let { headingLevel = 2, class: classname, ...props } = $props<AccordionProps>();

	setContext('accordion-heading-level', headingLevel);
</script>

<div class={classNames('accordion', classname)} {...props}>
	<slot />
</div>
