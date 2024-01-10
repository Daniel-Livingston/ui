<script lang="ts">
	import { enhance } from '$app/forms';
	import classNames from 'classnames';

	import type { FormProps } from './types';

	let { submitFunction, class: classname, ...props } = $props<FormProps>();
</script>

<form class={classNames('form', classname)} use:enhance={submitFunction} {...props}>
	<slot />
</form>

<style>
	:global(:root) {
		--form-gap: 1.25rem;

		--form-description-font-family: var(--sans-serif);
		--form-description-font-size: var(--font-size-sm);
		--form-description-font-weight: 400;
		--form-description-line-height: var(--body-line-height);
		--form-description-spacing-top: 0.25rem;
		--form-error-color: var(--color-danger);
		--form-error-font-family: var(--sans-serif);
		--form-error-font-size: var(--font-size-sm);
		--form-error-font-weight: 400;
		--form-error-line-height: var(--body-line-height);
		--form-error-spacing-top: 0.25rem;
		--form-input-border-color: rgba(var(--color-dark-rgb), 0.2);
		--form-input-border-width: 1px;
		--form-input-color: var(--color-dark);
		--form-input-font-family: var(--sans-serif);
		--form-input-font-size: var(--body-font-size);
		--form-input-font-weight: 400;
		--form-input-line-height: var(--body-line-height);
		--form-input-placeholder-color: rgba(var(--color-dark-rgb), 0.5);
		--form-input-padding-x: 0.75rem;
		--form-input-padding-y: 0.5rem;
		--form-input-focus-outline-color: var(--color-primary);
		--form-input-focus-outline-offset: 2px;
		--form-input-focus-outline-width: 2px;
		--form-label-font-family: var(--sans-serif);
		--form-label-font-size: var(--body-font-size);
		--form-label-font-weight: 500;
		--form-label-line-height: var(--body-line-height);
		--form-label-spacing: 0.5rem;
		--form-label-required-color: var(--color-danger);
		--form-label-required-spacing: 0.25rem;

		--form-checkbox-font-weight: 400;
		--form-checkbox-gap: 0.5rem;

		--form-radio-font-weight: 400;

		--form-range-gap: 0.5rem;
		--form-range-font-size: var(--body-font-size);
	}
</style>
