<script lang="ts">
	import classNames from 'classnames';

	import type { BadgeProps } from './types';

	let { size, variant, class: classname, ...props } = $props<BadgeProps>();
</script>

<span
	class={classNames(
		'badge',
		{ [`badge-${size}`]: !!size },
		{ [`badge-${variant}`]: !!variant },
		classname
	)}
	{...props}
>
	<slot />
</span>

<style>
	:global(:root) {
		--badge-bg: transparent;
		--badge-spacing-x: 0.5rem;
		--badge-spacing-y: 0.15rem;
		--badge-border-radius: 1rem;

		--badge-bg-primary: rgba(var(--color-primary-rgb), 0.8);
		--badge-bg-secondary: rgba(var(--color-secondary-rgb), 0.8);
		--badge-bg-success: rgba(var(--color-success-rgb), 0.8);
		--badge-bg-danger: rgba(var(--color-danger-rgb), 0.8);
		--badge-bg-warning: rgba(var(--color-warning-rgb), 0.8);
		--badge-bg-info: rgba(var(--color-info-rgb), 0.8);
		--badge-bg-light: rgba(var(--color-light-rgb), 0.8);
		--badge-bg-dark: rgba(var(--color-dark-rgb), 0.8);

		--badge-color-primary: var(--color-white);
		--badge-color-secondary: var(--color-white);
		--badge-color-success: var(--color-black);
		--badge-color-danger: var(--color-white);
		--badge-color-warning: var(--color-black);
		--badge-color-info: var(--color-white);
		--badge-color-light: var(--color-black);
		--badge-color-dark: var(--color-white);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--badge-color: var(--color-black);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--badge-color: var(--color-white);
		}
	}

	.badge {
		background-color: var(--badge-bg);
		border-radius: var(--badge-border-radius);
		color: var(--badge-color);
		font: inherit;
		padding: var(--badge-spacing-y) var(--badge-spacing-x);
	}

	.badge-primary {
		background-color: var(--badge-bg-primary);
		color: var(--badge-color-primary);
	}

	.badge-secondary {
		background-color: var(--badge-bg-secondary);
		color: var(--badge-color-secondary);
	}

	.badge-success {
		background-color: var(--badge-bg-success);
		color: var(--badge-color-success);
	}

	.badge-danger {
		background-color: var(--badge-bg-danger);
		color: var(--badge-color-danger);
	}

	.badge-warning {
		background-color: var(--badge-bg-warning);
		color: var(--badge-color-warning);
	}

	.badge-info {
		background-color: var(--badge-bg-info);
		color: var(--badge-color-info);
	}

	.badge-light {
		background-color: var(--badge-bg-light);
		color: var(--badge-color-light);
	}

	.badge-dark {
		background-color: var(--badge-bg-dark);
		color: var(--badge-color-dark);
	}
</style>
