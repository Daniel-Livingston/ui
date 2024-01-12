<script lang="ts">
	import classNames from 'classnames';

	import { Button } from '$lib/components/Button';
	import type { AlertProps } from './types';

	let {
		dismissible,
		icon: Icon,
		onDismiss,
		variant,
		class: classname,
		...props
	} = $props<AlertProps>();

	let dismissed = $state(false);
</script>

<div
	class={classNames('alert', `alert-${variant}`, classname)}
	class:dismissed
	{...props}
	role="alert"
>
	{#if Icon}
		<div class="alert-icon-wrapper">
			<Icon class="alert-icon" color="var(--alert-icon-color-{variant}, var(--alert-icon-color))" />
			<slot />
		</div>
	{:else}
		<slot />
	{/if}

	{#if dismissible}
		<Button
			onclick={() => {
				dismissed = true;
				onDismiss && onDismiss();
			}}
			close
		/>
	{/if}
</div>

<style>
	:global(:root) {
		--alert-bg: transparent;

		--alert-border-color: transparent;
		--alert-border-width: 1px;
		--alert-border-radius: 0.25rem;

		--alert-color: var(--color-black);
		--alert-icon-color: var(--alert-border-color);

		--alert-padding: 1rem;
		--alert-spacing-top: 1rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--alert-bg-primary: rgba(var(--color-primary-rgb), 0.2);
			--alert-bg-secondary: rgba(var(--color-secondary-rgb), 0.2);
			--alert-bg-success: rgba(var(--color-success-rgb), 0.2);
			--alert-bg-danger: rgba(var(--color-danger-rgb), 0.2);
			--alert-bg-warning: rgba(var(--color-warning-rgb), 0.2);
			--alert-bg-info: rgba(var(--color-info-rgb), 0.2);
			--alert-bg-light: rgba(var(--color-light-rgb), 0.2);
			--alert-bg-dark: rgba(var(--color-dark-rgb), 0.2);

			--alert-border-color-primary: var(--color-primary);
			--alert-border-color-secondary: var(--color-secondary);
			--alert-border-color-success: var(--color-success);
			--alert-border-color-danger: var(--color-danger);
			--alert-border-color-warning: var(--color-warning);
			--alert-border-color-info: var(--color-info);
			--alert-border-color-light: var(--color-light);
			--alert-border-color-dark: var(--color-dark);

			--alert-color-primary: var(--color-black);
			--alert-color-secondary: var(--color-black);
			--alert-color-success: var(--color-black);
			--alert-color-danger: var(--color-black);
			--alert-color-warning: var(--color-black);
			--alert-color-info: var(--color-black);
			--alert-color-light: var(--color-black);
			--alert-color-dark: var(--color-black);

			--alert-icon-color-primary: var(--alert-border-color-primary);
			--alert-icon-color-secondary: var(--alert-border-color-secondary);
			--alert-icon-color-success: var(--alert-border-color-success);
			--alert-icon-color-danger: var(--alert-border-color-danger);
			--alert-icon-color-warning: var(--alert-border-color-warning);
			--alert-icon-color-info: var(--alert-border-color-info);
			--alert-icon-color-light: var(--alert-border-color-light);
			--alert-icon-color-dark: var(--alert-border-color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--alert-bg-primary: rgba(var(--color-primary-rgb), 0.6);
			--alert-bg-secondary: rgba(var(--color-secondary-rgb), 0.6);
			--alert-bg-success: rgba(var(--color-success-rgb), 0.6);
			--alert-bg-danger: rgba(var(--color-danger-rgb), 0.6);
			--alert-bg-warning: rgba(var(--color-warning-rgb), 0.6);
			--alert-bg-info: rgba(var(--color-info-rgb), 0.6);
			--alert-bg-light: rgba(var(--color-light-rgb), 0.6);
			--alert-bg-dark: rgba(var(--color-dark-rgb), 0.6);

			--alert-border-color-primary: var(--color-primary);
			--alert-border-color-secondary: var(--color-secondary);
			--alert-border-color-success: var(--color-success);
			--alert-border-color-danger: var(--color-danger);
			--alert-border-color-warning: var(--color-warning);
			--alert-border-color-info: var(--color-info);
			--alert-border-color-light: var(--color-light);
			--alert-border-color-dark: var(--color-dark);

			--alert-color-primary: var(--color-light);
			--alert-color-secondary: var(--color-light);
			--alert-color-success: var(--color-light);
			--alert-color-danger: var(--color-light);
			--alert-color-warning: var(--color-black);
			--alert-color-info: var(--color-light);
			--alert-color-light: var(--color-black);
			--alert-color-dark: var(--color-light);

			--alert-icon-color-primary: var(--alert-border-color-primary);
			--alert-icon-color-secondary: var(--alert-border-color-secondary);
			--alert-icon-color-success: var(--alert-border-color-success);
			--alert-icon-color-danger: var(--alert-border-color-danger);
			--alert-icon-color-warning: var(--alert-border-color-warning);
			--alert-icon-color-info: var(--alert-border-color-info);
			--alert-icon-color-light: var(--alert-border-color-light);
			--alert-icon-color-dark: var(--alert-border-color-dark);
		}
	}

	.alert {
		align-items: center;
		background-color: var(--alert-bg);
		border: var(--alert-border-width) solid var(--alert-border-color);
		border-radius: var(--alert-border-radius, 0.25rem);
		color: var(--alert-color);
		display: flex;
		justify-content: space-between;
		padding: var(--alert-padding);
	}

	.alert-primary {
		background-color: var(--alert-bg-primary);
		border-color: var(--alert-border-color-primary);
		color: var(--alert-color-primary);
	}

	.alert-secondary {
		background-color: var(--alert-bg-secondary);
		border-color: var(--alert-border-color-secondary);
		color: var(--alert-color-secondary);
	}

	.alert-success {
		background-color: var(--alert-bg-success);
		border-color: var(--alert-border-color-success);
		color: var(--alert-color-success);
	}

	.alert-danger {
		background-color: var(--alert-bg-danger);
		border-color: var(--alert-border-color-danger);
		color: var(--alert-color-danger);
	}

	.alert-warning {
		background-color: var(--alert-bg-warning);
		border-color: var(--alert-border-color-warning);
		color: var(--alert-color-warning);
	}

	.alert-info {
		background-color: var(--alert-bg-info);
		border-color: var(--alert-border-color-info);
		color: var(--alert-color-info);
	}

	.alert-light {
		background-color: var(--alert-bg-light);
		border-color: var(--alert-border-color-light);
		color: var(--alert-color-light);
	}

	.alert-dark {
		background-color: var(--alert-bg-dark);
		border-color: var(--alert-border-color-dark);
		color: var(--alert-color-dark);
	}

	:global(*) + .alert {
		margin-top: var(--alert-spacing-top);
	}

	.alert.dismissed {
		display: none;
	}

	.alert-icon-wrapper {
		display: flex;
		gap: 0.5rem;
	}
</style>
