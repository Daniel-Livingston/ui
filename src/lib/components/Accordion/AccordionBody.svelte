<script lang="ts">
	import type { AccordionBodyProps } from "./types";

	let { children, class: classname, ...props } = $props<AccordionBodyProps>();
</script>

<div class="accordion-body {classname}" {...props}>
	{@render children()}
</div>
