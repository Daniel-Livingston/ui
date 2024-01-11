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
		border-bottom: var(--accordion-button-border-width) solid var(--accordion-button-border-color);
		color: var(--accordion-button-color-open);
	}

	.accordion__header.open .accordion__button {
		background-color: var(--accordion-button-bg-open);
	}

	.accordion__button {
		align-items: center;
		background-color: var(--accordion-button-bg);
		border: none;
		color: inherit;
		display: flex;
		font: var(--accordion-header-font-weight) var(--accordion-header-font-size) /
			var(--accordion-header-line-height) var(--accordion-header-font-family);
		justify-content: space-between;
		padding: var(--accordion-header-padding);
		text-align: start;
		width: 100%;
	}

	.accordion__button:not(:disabled) {
		cursor: pointer;
	}

	.accordion__button:focus {
		outline: var(--accordion-button-focus-outline-width) solid
			var(--accordion-button-focus-outline-color);
		outline-offset: var(--accordion-button-focus-ouline-offset);
	}
</style>
