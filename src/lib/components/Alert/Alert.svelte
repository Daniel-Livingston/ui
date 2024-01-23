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

<div class={classNames('alert', variant, classname)} class:dismissed {...props} role="alert">
	{#if Icon}
		<div class="alert-icon-wrapper">
			<Icon class="alert-icon" color="var(--_icon-color)" />
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
		--alert_bg: transparent;
		--alert_border-color: var(--border-color);
		--alert_border-radius: 0.25rem;
		--alert_border-width: 1px;
		--alert_color: var(--color-black);
		--alert_padding-x: 1rem;
		--alert_padding-y: 1rem;
		--alert__icon_color: var(--alert_border-color);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--alert_primary_bg: rgba(var(--color-primary-rgb), 0.2);
			--alert_primary_border-color: var(--color-primary);
			--alert_primary_color: var(--color-black);
			--alert_secondary_bg: rgba(var(--color-secondary-rgb), 0.2);
			--alert_secondary_border-color: var(--color-secondary);
			--alert_secondary_color: var(--color-black);
			--alert_success_bg: rgba(var(--color-success-rgb), 0.2);
			--alert_success_border-color: var(--color-success);
			--alert_success_color: var(--color-black);
			--alert_danger_bg: rgba(var(--color-danger-rgb), 0.2);
			--alert_danger_border-color: var(--color-danger);
			--alert_danger_color: var(--color-black);
			--alert_warning_bg: rgba(var(--color-warning-rgb), 0.2);
			--alert_warning_border-color: var(--color-warning);
			--alert_warning_color: var(--color-black);
			--alert_info_bg: rgba(var(--color-info-rgb), 0.2);
			--alert_info_border-color: var(--color-info);
			--alert_info_color: var(--color-black);
			--alert_light_bg: rgba(var(--color-light-rgb), 0.2);
			--alert_light_border-color: var(--color-light);
			--alert_light_color: var(--color-black);
			--alert_dark_bg: rgba(var(--color-dark-rgb), 0.2);
			--alert_dark_border-color: var(--color-dark);
			--alert_dark_color: var(--color-black);
			--alert__icon_primary_color: var(--color-primary);
			--alert__icon_secondary_color: var(--color-secondary);
			--alert__icon_success_color: var(--color-success);
			--alert__icon_danger_color: var(--color-danger);
			--alert__icon_warning_color: var(--color-warning);
			--alert__icon_info_color: var(--color-info);
			--alert__icon_light_color: var(--color-light);
			--alert__icon_dark_color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--alert_primary_bg: rgba(var(--color-primary-rgb), 0.6);
			--alert_primary_border-color: var(--color-primary);
			--alert_primary_color: var(--color-light);
			--alert_secondary_bg: rgba(var(--color-secondary-rgb), 0.6);
			--alert_secondary_border-color: var(--color-secondary);
			--alert_secondary_color: var(--color-light);
			--alert_success_bg: rgba(var(--color-success-rgb), 0.6);
			--alert_success_border-color: var(--color-success);
			--alert_success_color: var(--color-light);
			--alert_danger_bg: rgba(var(--color-danger-rgb), 0.6);
			--alert_danger_border-color: var(--color-danger);
			--alert_danger_color: var(--color-light);
			--alert_warning_bg: rgba(var(--color-warning-rgb), 0.6);
			--alert_warning_border-color: var(--color-warning);
			--alert_warning_color: var(--color-black);
			--alert_info_bg: rgba(var(--color-info-rgb), 0.6);
			--alert_info_border-color: var(--color-info);
			--alert_info_color: var(--color-light);
			--alert_light_bg: rgba(var(--color-light-rgb), 0.6);
			--alert_light_border-color: var(--color-light);
			--alert_light_color: var(--color-black);
			--alert_dark_bg: rgba(var(--color-dark-rgb), 0.6);
			--alert_dark_border-color: var(--color-dark);
			--alert_dark_color: var(--color-light);
			--alert__icon_primary_color: var(--color-primary);
			--alert__icon_secondary_color: var(--color-secondary);
			--alert__icon_success_color: var(--color-success);
			--alert__icon_danger_color: var(--color-danger);
			--alert__icon_warning_color: var(--color-warning);
			--alert__icon_info_color: var(--color-info);
			--alert__icon_light_color: var(--color-light);
			--alert__icon_dark_color: var(--color-dark);
		}
	}

	:where(.alert) {
		--_bg: var(--alert_bg);
		--_border-color: var(--alert_border-color);
		--_border: var(--alert_border-width) solid var(--_border-color);
		--_color: var(--alert_color);
		--_icon-color: var(--alert__icon_color);

		align-items: center;
		background-color: var(--_bg);
		border: var(--_border);
		border-radius: var(--alert_border-radius, 0.25rem);
		color: var(--_color);
		display: flex;
		justify-content: space-between;
		padding: var(--alert_padding-y) var(--alert_padding-x);
	}

	:where(.primary) {
		--_bg: var(--alert_primary_bg);
		--_border-color: var(--alert_primary_border-color);
		--_color: var(--alert_primary_color);
		--_icon-color: var(--alert__icon_primary_color);
	}

	:where(.secondary) {
		--_bg: var(--alert_secondary_bg);
		--_border-color: var(--alert_secondary_border-color);
		--_color: var(--alert_secondary_color);
		--_icon-color: var(--alert__icon_secondary_color);
	}

	:where(.success) {
		--_bg: var(--alert_success_bg);
		--_border-color: var(--alert_success_border-color);
		--_color: var(--alert_success_color);
		--_icon-color: var(--alert__icon_success_color);
	}

	:where(.danger) {
		--_bg: var(--alert_danger_bg);
		--_border-color: var(--alert_danger_border-color);
		--_color: var(--alert_danger_color);
		--_icon-color: var(--alert__icon_danger_color);
	}

	:where(.warning) {
		--_bg: var(--alert_warning_bg);
		--_border-color: var(--alert_warning_border-color);
		--_color: var(--alert_warning_color);
		--_icon-color: var(--alert__icon_warning_color);
	}

	:where(.info) {
		--_bg: var(--alert_info_bg);
		--_border-color: var(--alert_info_border-color);
		--_color: var(--alert_info_color);
		--_icon-color: var(--alert__icon_info_color);
	}

	:where(.light) {
		--_bg: var(--alert_light_bg);
		--_border-color: var(--alert_light_border-color);
		--_color: var(--alert_light_color);
		--_icon-color: var(--alert__icon_light_color);
	}

	:where(.dark) {
		--_bg: var(--alert_dark_bg);
		--_border-color: var(--alert_dark_border-color);
		--_color: var(--alert_dark_color);
		--_icon-color: var(--alert__icon_dark_color);
	}

	:where(.dismissed) {
		display: none;
	}

	:where(.alert-icon-wrapper) {
		display: flex;
		gap: 0.5rem;
	}
</style>
