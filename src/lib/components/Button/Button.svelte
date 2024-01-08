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
	class={classNames(
		'button',
		{ [`button-${variant}`]: !!variant },
		{ [`button-${size}`]: !!size },
		classname
	)}
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
		--button-bg: transparent;
		--button-bg-primary: var(--color-primary);
		--button-bg-secondary: var(--color-secondary);
		--button-bg-success: var(--color-success);
		--button-bg-danger: var(--color-danger);
		--button-bg-warning: var(--color-warning);
		--button-bg-info: var(--color-info);
		--button-bg-light: var(--color-light);
		--button-bg-dark: var(--color-dark);

		--button-bg-hover: rgba(var(--color-black-rgb), 0.1);
		--button-bg-hover-primary: rgba(var(--color-primary-rgb), 0.9);
		--button-bg-hover-secondary: rgba(var(--color-secondary-rgb), 0.9);
		--button-bg-hover-success: rgba(var(--color-success-rgb), 0.9);
		--button-bg-hover-danger: rgba(var(--color-danger-rgb), 0.9);
		--button-bg-hover-warning: rgba(var(--color-warning-rgb), 0.9);
		--button-bg-hover-info: rgba(var(--color-info-rgb), 0.9);
		--button-bg-hover-light: rgba(var(--color-light-rgb), 0.9);
		--button-bg-hover-dark: rgba(var(--color-dark-rgb), 0.9);

		--button-border-color: transparent;
		--button-border-color-primary: var(--color-primary);
		--button-border-color-secondary: var(--color-secondary);
		--button-border-color-success: var(--color-success);
		--button-border-color-danger: var(--color-danger);
		--button-border-color-warning: var(--color-warning);
		--button-border-color-info: var(--color-info);
		--button-border-color-light: var(--color-light);
		--button-border-color-dark: var(--color-dark);
		--button-border-radius: 0;
		--button-border-radius-rounded: 0.25rem;
		--button-border-width: 1px;

		--button-color: var(--color-black);
		--button-color-primary: var(--color-white);
		--button-color-secondary: var(--color-white);
		--button-color-success: var(--color-white);
		--button-color-danger: var(--color-white);
		--button-color-warning: var(--color-black);
		--button-color-info: var(--color-black);
		--button-color-light: var(--color-black);
		--button-color-dark: var(--color-white);

		--button-font-size: inherit;
		--button-font-size-xs: var(--font-size-xs);
		--button-font-size-sm: var(--font-size-sm);
		--button-font-size-md: var(--font-size-md);
		--button-font-size-lg: var(--font-size-lg);
		--button-font-size-xl: var(--font-size-xl);

		--button-padding-x: 1rem;
		--button-padding-x-xs: 0.25rem;
		--button-padding-x-sm: 0.5rem;
		--button-padding-x-md: 1rem;
		--button-padding-x-lg: 2rem;
		--button-padding-x-xl: 3rem;
		--button-padding-y: 0.5rem;
		--button-padding-y-xs: 0.25rem;
		--button-padding-y-sm: 0.5rem;
		--button-padding-y-md: 0.5rem;
		--button-padding-y-lg: 1rem;
		--button-padding-y-xl: 1.5rem;

		--button-focus-outline-color: var(--color-black);
		--button-focus-outline-color-primary: var(--color-primary);
		--button-focus-outline-color-secondary: var(--color-secondary);
		--button-focus-outline-color-success: var(--color-success);
		--button-focus-outline-color-danger: var(--color-danger);
		--button-focus-outline-color-warning: var(--color-warning);
		--button-focus-outline-color-info: var(--color-info);
		--button-focus-outline-color-light: var(--color-black);
		--button-focus-outline-color-dark: var(--color-dark);
		--button-focus-outline-offset: 2px;
		--button-focus-outline-width: 2px;

		--button-hover-bg: transparent;
	}

	.button {
		background-color: var(--button-bg);
		border: var(--button-border-width) solid var(--button-border-color);
		border-radius: var(--button-border-radius);
		color: var(--_text-color-button, var(--color-black));
		font-size: var(--button-font-size);
		padding: var(--button-padding-y) var(--button-padding-x);
		transition: background-color 0.2s ease-in-out;
	}

	.button:focus {
		outline: var(--button-focus-outline-width) solid var(--button-focus-outline-color);
		outline-offset: var(--button-focus-outline-offset);
	}

	.button:not(:disabled):hover {
		background-color: var(--button-bg-hover);
	}

	.button-primary {
		background-color: var(--button-bg-primary);
		border-color: var(--button-border-color-primary);
		color: var(--button-color-primary);
	}

	.button-primary:focus {
		outline-color: var(--button-focus-outline-color-primary);
	}

	.button-primary:not(:disabled):hover {
		background-color: var(--button-bg-hover-primary);
	}

	.button-secondary {
		background-color: var(--button-bg-secondary);
		border-color: var(--button-border-color-secondary);
		color: var(--button-color-secondary);
	}

	.button-secondary:focus {
		outline-color: var(--button-focus-outline-color-secondary);
	}

	.button-secondary:not(:disabled):hover {
		background-color: var(--button-bg-hover-secondary);
	}

	.button-success {
		background-color: var(--button-bg-success);
		border-color: var(--button-border-color-success);
		color: var(--button-color-success);
	}

	.button-success:focus {
		outline-color: var(--button-focus-outline-color-success);
	}

	.button-success:not(:disabled):hover {
		background-color: var(--button-bg-hover-success);
	}

	.button-danger {
		background-color: var(--button-bg-danger);
		border-color: var(--button-border-color-danger);
		color: var(--button-color-danger);
	}

	.button-danger:focus {
		outline-color: var(--button-focus-outline-color-danger);
	}

	.button-danger:not(:disabled):hover {
		background-color: var(--button-bg-hover-danger);
	}

	.button-warning {
		background-color: var(--button-bg-warning);
		border-color: var(--button-border-color-warning);
		color: var(--button-color-warning);
	}

	.button-warning:focus {
		outline-color: var(--button-focus-outline-color-warning);
	}

	.button-warning:not(:disabled):hover {
		background-color: var(--button-bg-hover-warning);
	}

	.button-info {
		background-color: var(--button-bg-info);
		border-color: var(--button-border-color-info);
		color: var(--button-color-info);
	}

	.button-info:focus {
		outline-color: var(--button-focus-outline-color-info);
	}

	.button-info:not(:disabled):hover {
		background-color: var(--button-bg-hover-info);
	}

	.button-light {
		background-color: var(--button-bg-light);
		border-color: var(--button-border-color-light);
		color: var(--button-color-light);
	}

	.button-light:focus {
		outline-color: var(--button-focus-outline-color-light);
	}

	.button-light:not(:disabled):hover {
		background-color: var(--button-bg-hover-light);
	}

	.button-dark {
		background-color: var(--button-bg-dark);
		border-color: var(--button-border-color-dark);
		color: var(--button-color-dark);
	}

	.button-dark:focus {
		outline-color: var(--button-focus-outline-color-dark);
	}

	.button-dark:not(:disabled):hover {
		background-color: var(--button-bg-hover-dark);
	}

	.button-xs {
		font-size: var(--button-font-size-xs);
		padding: var(--button-padding-y-xs) var(--button-padding-x-xs);
	}

	.button-sm {
		font-size: var(--button-font-size-sm);
		padding: var(--button-padding-y-sm) var(--button-padding-x-sm);
	}

	.button-md {
		font-size: var(--button-font-size-md);
		padding: var(--button-padding-y-md) var(--button-padding-x-md);
	}

	.button-lg {
		font-size: var(--button-font-size-lg);
		padding: var(--button-padding-y-lg) var(--button-padding-x-lg);
	}

	.button-xl {
		font-size: var(--button-font-size-xl);
		padding: var(--button-padding-y-xl) var(--button-padding-x-xl);
	}

	.button.rounded {
		border-radius: var(--button-border-radius-rounded);
	}

	.button:not(:disabled) {
		cursor: pointer;
	}

	.button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.button.close {
		padding: 0.25rem;
	}
</style>
