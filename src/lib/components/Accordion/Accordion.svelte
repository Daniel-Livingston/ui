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

<style>
	:global(:root) {
		--accordion_border-color: var(--border-color);
		--accordion_border-width: 1px;
		--accordion_spacing: 0.75rem;
		--accordion__header_bg: transparent;
		--accordion__header_font-family: var(--sans-serif);
		--accordion__header_font-size: var(--body-font-size);
		--accordion__header_font-weight: 500;
		--accordion__header_padding-x: var(--accordion_spacing);
		--accordion__header_padding-y: var(--accordion_spacing);
		--accordion__button_focus_outline-color: var(--color-primary);
		--accordion__button_focus_outline-offset: 2px;
		--accordion__button_focus_outline-width: 2px;
		--accordion__content_padding-x: var(--accordion_spacing);
		--accordion__content_padding-y: var(--accordion_spacing);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--accordion__header_open_bg: var(--color-light);
			--accordion__header_open_color: var(--color-primary-700);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--accordion__header_open_bg: var(--color-gray-900);
			--accordion__header_open_color: var(--color-primary-300);
		}
	}

	.accordion {
		--_border: var(--accordion_border-width) solid var(--accordion_border-color);
	}
</style>
