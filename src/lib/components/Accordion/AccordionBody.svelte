<script lang="ts">
	import type { AccordionBodyProps } from './types';
	import { collapse } from '$lib/actions';

	let { controller, open, ...props } = $props<AccordionBodyProps>();
</script>

<div
	class="accordion__body"
	{...props}
	use:collapse={{
		collapsed: !open,
		controller
	}}
>
	<slot />
</div>
