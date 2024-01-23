<script lang="ts">
	import classNames from 'classnames';

	import { CloseIcon } from '$lib/icons';
	import type { ButtonProps } from './types';

	let {
		'aria-label': ariaLabel,
		close = false,
		rounded = false,
		size,
		type = 'button',
		variant,
		class: classname,
		...props
	} = $props<ButtonProps>();
</script>

<button
	class={classNames('button', size, variant, classname)}
	class:close
	class:rounded
	{type}
	aria-label={ariaLabel ? ariaLabel : close ? 'Close' : undefined}
	{...props}
>
	{#if close}
		<CloseIcon />
	{:else}
		<slot />
	{/if}
</button>

<style>
	:global(:root) {
		--button_bg: transparent;
		--button_border-color: transparent;
		--button_border-radius: 0;
		--button_border-width: 1px;
		--button_color: var(--color-black);
		--button_font-size: var(--body-font-size);
		--button_padding-x: 1rem;
		--button_padding-y: 0.5rem;
		--button_focus_outline-color: var(--color-primary);
		--button_focus_outline-offset: 2px;
		--button_focus_outline-width: 2px;
		--button_hover_bg: rgba(var(--color-black-rgb), 0.1);

		--button_primary_bg: var(--color-primary);
		--button_primary_border-color: var(--color-primary);
		--button_primary_color: var(--color-white);
		--button_primary_focus_outline-color: var(--color-primary);
		--button_primary_hover_bg: rgba(var(--color-primary-rgb), 0.9);

		--button_secondary_bg: var(--color-secondary);
		--button_secondary_border-color: var(--color-secondary);
		--button_secondary_color: var(--color-white);
		--button_secondary_focus_outline-color: var(--color-secondary);
		--button_secondary_hover_bg: rgba(var(--color-secondary-rgb), 0.9);

		--button_success_bg: var(--color-success);
		--button_success_border-color: var(--color-success);
		--button_success_color: var(--color-black);
		--button_success_focus_outline-color: var(--color-success);
		--button_success_hover_bg: rgba(var(--color-success-rgb), 0.9);

		--button_danger_bg: var(--color-danger);
		--button_danger_border-color: var(--color-danger);
		--button_danger_color: var(--color-white);
		--button_danger_focus_outline-color: var(--color-danger);
		--button_danger_hover_bg: rgba(var(--color-danger-rgb), 0.9);

		--button_warning_bg: var(--color-warning);
		--button_warning_border-color: var(--color-warning);
		--button_warning_color: var(--color-black);
		--button_warning_focus_outline-color: var(--color-warning);
		--button_warning_hover_bg: rgba(var(--color-warning-rgb), 0.9);

		--button_info_bg: var(--color-info);
		--button_info_border-color: var(--color-info);
		--button_info_color: var(--color-black);
		--button_info_focus_outline-color: var(--color-info);
		--button_info_hover_bg: rgba(var(--color-info-rgb), 0.9);

		--button_light_bg: var(--color-light);
		--button_light_border-color: var(--color-light);
		--button_light_color: var(--color-black);
		--button_light_focus_outline-color: var(--color-light);
		--button_light_hover_bg: rgba(var(--color-light-rgb), 0.9);

		--button_dark_bg: var(--color-dark);
		--button_dark_border-color: var(--color-dark);
		--button_dark_color: var(--color-white);
		--button_dark_focus_outline-color: var(--color-dark);
		--button_dark_hover_bg: rgba(var(--color-dark-rgb), 0.9);

		--button_xs_font-size: var(--font-size-xs);
		--button_xs_padding-x: 0.25rem;
		--button_xs_padding-y: 0.25rem;

		--button_sm_font-size: var(--font-size-sm);
		--button_sm_padding-x: 0.5rem;
		--button_sm_padding-y: 0.5rem;

		--button_md_font-size: var(--font-size-md);
		--button_md_padding-x: 1rem;
		--button_md_padding-y: 0.5rem;

		--button_lg_font-size: var(--font-size-lg);
		--button_lg_padding-x: 2rem;
		--button_lg_padding-y: 1rem;

		--button_xl_font-size: var(--font-size-xl);
		--button_xl_padding-x: 3rem;
		--button_xl_padding-y: 1.5rem;

		--button_rounded_border-radius: 0.25rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--button_color: var(--color-black);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--button_color: var(--color-white);
		}
	}

	:where(.button) {
		--_bg: var(--button_bg);
		--_border-color: var(--button_border-color);
		--_border: var(--button_border-width) solid var(--button_border-color);
		--_border-radius: var(--button_border-radius);
		--_color: var(--button_color);
		--_font-size: var(--button_font-size);
		--_padding-x: var(--button_padding-x);
		--_padding-y: var(--button_padding-y);
		--_focus_outline-color: var(--button_focus_outline-color);
		--_focus_outline: var(--button_focus_outline-width) solid var(--button_focus_outline-color);
		--_hover_bg: var(--button_hover_bg);

		background-color: var(--_bg);
		border: var(--_border);
		border-radius: var(--_border-radius);
		color: var(--_color);
		cursor: pointer;
		font-size: var(--_font-size);
		padding: var(--_padding-y) var(--_padding-x);
		transition: background-color 0.2s ease-in-out;
	}

	:where(.button:focus) {
		outline: var(--button_focus_outline-width) solid var(--_focus_outline-color);
		outline-offset: var(--button_focus_outline-offset);
	}

	:where(.button:not(:disabled):hover) {
		background-color: var(--_hover_bg);
	}

	:where(.button:disabled) {
		opacity: 0.5;
		cursor: not-allowed;
	}

	:where(.primary) {
		--_bg: var(--button_primary_bg);
		--_border-color: var(--button_primary_border-color);
		--_color: var(--button_primary_color);
		--_focus_outline-color: var(--button_primary_focus_outline-color);
		--_hover_bg: var(--button_primary_hover_bg);
	}

	:where(.secondary) {
		--_bg: var(--button_secondary_bg);
		--_border-color: var(--button_secondary_border-color);
		--_color: var(--button_secondary_color);
		--_focus_outline-color: var(--button_secondary_focus_outline-color);
		--_hover_bg: var(--button_secondary_hover_bg);
	}

	:where(.success) {
		--_bg: var(--button_success_bg);
		--_border-color: var(--button_success_border-color);
		--_color: var(--button_success_color);
		--_focus_outline-color: var(--button_success_focus_outline-color);
		--_hover_bg: var(--button_success_hover_bg);
	}

	:where(.danger) {
		--_bg: var(--button_danger_bg);
		--_border-color: var(--button_danger_border-color);
		--_color: var(--button_danger_color);
		--_focus_outline-color: var(--button_danger_focus_outline-color);
		--_hover_bg: var(--button_danger_hover_bg);
	}

	:where(.warning) {
		--_bg: var(--button_warning_bg);
		--_border-color: var(--button_warning_border-color);
		--_color: var(--button_warning_color);
		--_focus_outline-color: var(--button_warning_focus_outline-color);
		--_hover_bg: var(--button_warning_hover_bg);
	}

	:where(.info) {
		--_bg: var(--button_info_bg);
		--_border-color: var(--button_info_border-color);
		--_color: var(--button_info_color);
		--_focus_outline-color: var(--button_info_focus_outline-color);
		--_hover_bg: var(--button_info_hover_bg);
	}

	:where(.light) {
		--_bg: var(--button_light_bg);
		--_border-color: var(--button_light_border-color);
		--_color: var(--button_light_color);
		--_focus_outline-color: var(--button_light_focus_outline-color);
		--_hover_bg: var(--button_light_hover_bg);
	}

	:where(.dark) {
		--_bg: var(--button_dark_bg);
		--_border-color: var(--button_dark_border-color);
		--_color: var(--button_dark_color);
		--_focus_outline-color: var(--button_dark_focus_outline-color);
		--_hover_bg: var(--button_dark_hover_bg);
	}

	:where(.xs) {
		--_font-size: var(--button_xs_font-size);
		--_padding-x: var(--button_xs_padding-x);
		--_padding-y: var(--button_xs_padding-y);
	}

	:where(.sm) {
		--_font-size: var(--button_sm_font-size);
		--_padding-x: var(--button_sm_padding-x);
		--_padding-y: var(--button_sm_padding-y);
	}

	:where(.md) {
		--_font-size: var(--button_md_font-size);
		--_padding-x: var(--button_md_padding-x);
		--_padding-y: var(--button_md_padding-y);
	}

	:where(.lg) {
		--_font-size: var(--button_lg_font-size);
		--_padding-x: var(--button_lg_padding-x);
		--_padding-y: var(--button_lg_padding-y);
	}

	:where(.xl) {
		--_font-size: var(--button_xl_font-size);
		--_padding-x: var(--button_xl_padding-x);
		--_padding-y: var(--button_xl_padding-y);
	}

	:where(.rounded) {
		--_border-radius: var(--button_rounded_border-radius);
	}

	:where(.close) {
		border-radius: 100%;
		padding: 0.25rem;
	}
</style>
