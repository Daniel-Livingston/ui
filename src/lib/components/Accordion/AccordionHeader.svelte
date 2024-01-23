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
	:where(.accordion__header) {
		background-color: var(--accordion__header_bg);
		font-family: var(--accordion__header_font-family);
		font-size: var(--accordion__header_font-size);
		font-weight: var(--accordion__header_font-weight);
	}

	:where(.open) {
		background-color: var(--accordion__header_open_bg);
		border-bottom: var(--_border);
		color: var(--accordion__header_open_color);
	}

	:where(.accordion__button) {
		align-items: center;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		display: flex;
		font: inherit;
		justify-content: space-between;
		padding: var(--accordion__header_padding-y) var(--accordion__header_padding-x);
		text-align: start;
		width: 100%;
	}

	:where(.accordion__button:focus) {
		outline: var(--accordion__button_focus_outline-width) solid
			var(--accordion__button_focus_outline-color);
		outline-offset: var(--accordion__button_focus_ouline-offset);
	}
</style>
