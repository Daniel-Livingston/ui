<script lang="ts">
	import type { AccordionBodyProps } from './types';

	let { class: classname, ...props } = $props<AccordionBodyProps>();
</script>

<div class="accordion-body {classname}" {...props}>
	<slot />
</div>
