<script lang="ts">
	import { getContext } from 'svelte';

	import { ChevronIcon } from '$lib/icons';
	import type { AccordionHeaderProps } from './types';

	let { open, ref, ...props } = $props<AccordionHeaderProps>();

	const headingLevel = getContext<1 | 2 | 3 | 4 | 5 | 6>('accordion-heading-level');
</script>

<svelte:element this={`h${headingLevel}`} class="accordion__header" class:open>
	<button
		class="accordion__button"
		type="button"
		bind:this={ref}
		{...props}
		on:click={() => (open = !open)}
	>
		<span><slot /></span>
		<ChevronIcon class="accordion__button-icon" direction={open ? 'up' : 'down'} />
	</button>
</svelte:element>

<style>
	.accordion__header {
		margin: 0;
		padding: 0;
	}

	.accordion__header.open {
		background-color: var(--background-color-accordion-button-open, var(--_color-light));
		border-bottom: var(--border-width-accordion-button, 1px) solid
			var(--border-color-accordion-button, rgba(var(--_color-dark-rgb), 0.2));
		color: var(--color-accordion-button-open, var(--_color-primary));
	}

	.accordion__button {
		align-items: center;
		background-color: var(--background-color-accordion-button, transparent);
		border: none;
		color: inherit;
		display: flex;
		font: var(--font-weight-accordion-header, 500) var(--font-size-accordion-header, 1rem) /
			var(--line-height-accordion-header, 1.5)
			var(--font-family-accordion-header, var(--_font-family-sans-serif));
		justify-content: space-between;
		padding: var(--padding-accordion-header, 0.75rem);
		text-align: start;
		width: 100%;
	}

	.accordion__button:not(:disabled) {
		cursor: pointer;
	}

	.accordion__button:focus {
		outline: var(--outline-width-accordion-button, 2px) solid
			var(--outline-color-accordion-button, var(--_color-primary));
		outline-offset: var(--outline-offset-accordion-button, 2px);
	}
</style>
