<script lang="ts">
	import classNames from 'classnames';

	import type { FieldProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		inline,
		label,
		required,
		reverse
	} = $props<FieldProps>();
</script>

<div
	class={classNames('form__field', classname)}
	class:error
	class:inline
	class:required
	class:reverse
>
	<label for={id} class="form__label">{label}</label>

	{#if description}
		<p class="form__description">{description}</p>
	{/if}

	<slot />

	{#if error}
		<p class="form__error">{error}</p>
	{/if}
</div>

<style>
	:global(:root) {
		--form-field-spacing-top: 1.25rem;
		--form-field-description-font-family: var(--sans-serif);
		--form-field-description-font-size: var(--font-size-sm);
		--form-field-description-font-weight: 400;
		--form-field-description-line-height: var(--body-line-height);
		--form-field-description-spacing-top: 0.25rem;
		--form-field-error-font-family: var(--sans-serif);
		--form-field-error-font-size: var(--font-size-sm);
		--form-field-error-font-weight: 400;
		--form-field-error-line-height: var(--body-line-height);
		--form-field-error-spacing-top: 0.25rem;

		--form-input-bg: var(--alt-bg);
		--form-input-border-color: var(--border-color);
		--form-input-border-width: 1px;
		--form-input-font-family: var(--sans-serif);
		--form-input-font-size: var(--body-font-size);
		--form-input-font-weight: 400;
		--form-input-line-height: var(--body-line-height);
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
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--form-field-error-color: var(--color-danger);
			--form-input-color: var(--color-black);
			--form-input-placeholder-color: rgba(var(--color-dark-rgb), 0.5);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--form-field-error-color: var(--color-danger-300);
			--form-input-color: var(--color-white);
			--form-input-placeholder-color: rgba(var(--color-light-rgb), 0.5);
		}

		.form__field :global(.form__input) {
			color-scheme: dark;
		}
	}

	:global(.form__field) + :where(.form__field) {
		margin-top: var(--form-field-spacing-top);
	}

	.form__field.inline {
		align-items: center;
		display: flex;
	}

	.form__field.reverse {
		flex-direction: row-reverse;
		gap: var(--form-label-spacing);
		justify-content: flex-end;
	}

	.form__label {
		display: block;
		font-family: var(--form-label-font-family);
		font-size: var(--form-label-font-size);
		font-weight: var(--form-label-font-weight);
		line-height: var(--form-label-line-height);
	}

	.form__description {
		font-family: var(--form-field-description-font-family);
		font-size: var(--form-field-description-font-size);
		font-weight: var(--form-field-description-font-weight);
		line-height: var(--form-field-description-line-height);
		margin-top: var(--form-field-description-spacing-top);
	}

	.form__field.error :global(.form__input) {
		border-color: var(--form-error-color);
	}

	.form__field.required .form__label::after {
		content: '*';
		color: var(--form-label-required-color);
		margin-inline-start: var(--form-label-required-spacing);
	}

	.form__field :global(.form__input) {
		background-color: var(--form-input-bg);
		border: var(--form-input-border-width) solid var(--form-input-border-color);
		color: var(--form-input-color);
		display: block;
		font-family: var(--form-input-font-family);
		font-size: var(--form-input-font-size);
		font-weight: var(--form-input-font-weight);
		line-height: var(--form-input-line-height);
		margin-top: var(--form-label-spacing);
		padding: var(--form-input-padding-y) var(--form-input-padding-x);
		width: 100%;
	}

	.form__field :global(.form__input:focus) {
		outline: var(--form-input-focus-outline-width) solid var(--form-input-focus-outline-color);
		outline-offset: var(--form-input-focus-outline-offset);
	}

	.form__field :global(.form__input::placeholder) {
		color: var(--form-input-placeholder-color);
	}

	.form__field :global(.form__input::-ms-input-placeholder) {
		color: var(--form-input-placeholder-color);
		opacity: 1;
	}

	.form__error {
		color: var(--form-field-error-color);
		font-family: var(--form-field-error-font-family);
		font-size: var(--form-field-error-font-size);
		font-weight: var(--form-field-error-font-weight);
		line-height: var(--form-field-error-line-height);
		margin-top: var(--form-field-error-spacing-top);
	}
</style>
