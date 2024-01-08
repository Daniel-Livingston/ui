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
			<Icon class="alert-icon" />
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
	.alert {
		align-items: center;
		background-color: var(--_background-color-alert, transparent);
		border: var(--border-width-alert, 1px) solid var(--_border-color-alert, transparent);
		border-radius: var(--border-radius-alert, 0.25rem);
		color: var(--text-color-alert, var(--color-black));
		display: flex;
		justify-content: space-between;
		padding: var(--padding-alert, 1rem);
	}

	.alert-primary {
		--_background-color-alert: rgba(var(--_color-primary-rgb), 0.2);
		--_border-color-alert: var(--_color-primary);
	}

	.alert-secondary {
		--_background-color-alert: rgba(var(--_color-secondary-rgb), 0.2);
		--_border-color-alert: var(--_color-secondary);
	}

	.alert-success {
		--_background-color-alert: rgba(var(--_color-success-rgb), 0.2);
		--_border-color-alert: var(--_color-success);
	}

	.alert-danger {
		--_background-color-alert: rgba(var(--_color-danger-rgb), 0.2);
		--_border-color-alert: var(--_color-danger);
	}

	.alert-warning {
		--_background-color-alert: rgba(var(--_color-warning-rgb), 0.2);
		--_border-color-alert: var(--_color-warning);
	}

	.alert-info {
		--_background-color-alert: rgba(var(--_color-info-rgb), 0.2);
		--_border-color-alert: var(--_color-info);
	}

	.alert-light {
		--_background-color-alert: rgba(var(--_color-light-rgb), 0.2);
		--_border-color-alert: var(--_color-light);
	}

	.alert-dark {
		--_background-color-alert: rgba(var(--_color-dark-rgb), 0.2);
		--_border-color-alert: var(--_color-dark);
	}

	* + .alert {
		margin-top: var(--margin-top-alert, 1rem);
	}

	.alert.dismissed {
		display: none;
	}

	.alert-icon-wrapper {
		display: flex;
		gap: 0.5rem;
	}

	.alert-icon {
		color: var(--_border-color-alert, var(--color-black));
	}
</style>
