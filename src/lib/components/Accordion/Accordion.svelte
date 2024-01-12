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
		--accordion-button-bg: transparent;
		--accordion-button-border-width: 1px;
		--accordion-button-color: inherit;
		--accordion-button-focus-outline-color: var(--color-primary);
		--accordion-button-focus-outline-offset: 2px;
		--accordion-button-focus-outline-width: 2px;

		--accordion-content-padding: 1rem 0.75rem;

		--accordion-header-font-family: var(--sans-serif);
		--accordion-header-font-size: var(--body-font-size);
		--accordion-header-font-weight: 500;
		--accordion-header-line-height: var(--body-line-height);
		--accordion-header-padding: 0.75rem;

		--accordion-item-border-width: 1px;
	}

	/* Theming. */
	@media (prefers-color-scheme: light) {
		:global(:root) {
			--accordion-button-bg-open: var(--color-light);
			--accordion-button-color-open: var(--color-primary-700);
			--accordion-button-border-color: rgba(var(--color-dark-rgb), 0.2);

			--accordion-item-border-color: rgba(var(--color-dark-rgb), 0.2);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--accordion-button-bg-open: var(--color-gray-900);
			--accordion-button-color-open: var(--color-primary-300);
			--accordion-button-border-color: rgba(var(--color-light-rgb), 0.2);

			--accordion-item-border-color: rgba(var(--color-light-rgb), 0.2);
		}
	}
</style>
