<script lang="ts">
	import { collapse } from '$lib/actions';
	import type { AccordionBodyProps } from './types';

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
	<div class="accordion__content">
		<slot />
	</div>
</div>

<style>
	.accordion__content {
		padding: var(--accordion__content_padding-y) var(--accordion__content_padding-x);
	}
</style>
