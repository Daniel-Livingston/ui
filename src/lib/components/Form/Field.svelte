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

{#snippet form_label()}
	<label for={id} class="form__field__label">{label}</label>
{/snippet}

<div class={classNames('form__field', classname)} class:error class:inline class:required>
	{#if inline}
		{#if reverse}
			<slot />
			{@render form_label()}
		{:else}
			{@render form_label()}
			<slot />
		{/if}
	{:else}
		{@render form_label()}
		{#if description}
			<p class="form__field__description">{description}</p>
		{/if}

		<slot />

		{#if error}
			<p class="form__field__error">{error}</p>
		{/if}
	{/if}
</div>

<style>
	:global(:root) {
		--form__field_spacing-y: 1.25rem;
		--form__field__description_font-family: var(--sans-serif);
		--form__field__description_font-size: var(--font-size-sm);
		--form__field__description_font-weight: 400;
		--form__field__error_color: var(--color-danger);
		--form__field__error_font-family: var(--sans-serif);
		--form__field__error_font-size: var(--font-size-sm);
		--form__field__error_font-weight: 400;
		--form__field__input_bg: var(--alt-bg);
		--form__field__input_border-color: var(--border-color);
		--form__field__input_border-width: 1px;
		--form__field__input_color: var(--color-dark);
		--form__field__input_font-family: var(--sans-serif);
		--form__field__input_font-size: var(--body-font-size);
		--form__field__input_font-weight: 400;
		--form__field__input_padding-x: 0.75rem;
		--form__field__input_padding-y: 0.5rem;
		--form__field__input_spacing-y: 0.5rem;
		--form__field__input_focus_outline-color: var(--color-primary);
		--form__field__input_focus_outline-offset: 2px;
		--form__field__input_focus_outline-width: 2px;
		--form__field__input__placeholder_color: rgba(var(--color-dark-rgb), 0.5);
		--form__field__label_font-family: var(--sans-serif);
		--form__field__label_font-size: var(--body-font-size);
		--form__field__label_font-weight: 500;
		--form__field__label_spacing-y: 0.5rem;
		--form__field__label_required_color: var(--color-danger);
		--form__field__label_required_spacing-x: 0.25rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--form__field__error_color: var(--color-danger);
			--form__field__input_color: var(--color-dark);
			--form__field__input__placeholder_color: rgba(var(--color-dark-rgb), 0.5);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--form__field__error_color: var(--color-danger-300);
			--form__field__input_color: var(--color-white);
			--form__field__input__placeholder_color: rgba(var(--color-light-rgb), 0.5);
		}

		:where(.form__field) :global(:where(.form__field__input)) {
			color-scheme: dark;
		}
	}

	/* .form__field styles. */
	:where(.form__field) {
		margin-block: var(--form__field_spacing-y);
	}

	:where(.inline:not(:first-of-type)) {
		margin-block-start: 0.25rem;
	}

	:where(.inline:not(:last-of-type)) {
		margin-block-end: 0.25rem;
	}

	/* .form__field__label styles. */
	:where(.form__field__label) {
		display: block;
		font-family: var(--form__field__label_font-family);
		font-size: var(--form__field__label_font-size);
		font-weight: var(--form__field__label_font-weight);
		margin-block: var(--form__field__label_spacing-y);
	}

	:where(.required .form__field__label)::after {
		content: '*';
		color: var(--form__field__label_required_color);
		margin-inline: var(--form__field__label_required_spacing-x);
	}

	:where(.inline .form__field__label) {
		display: inline-block;
		font-weight: 400;
		margin-block: 0;
		margin-inline-start: 0.5rem;
	}

	/* .form__field__description styles. */
	:where(.form__field__description) {
		font-family: var(--form__field__description_font-family);
		font-size: var(--form__field__description_font-size);
		font-weight: var(--form__field__description_font-weight);
	}

	/* .form__field__error styles. */
	:where(.form__field__error) {
		color: var(--form__field__error_color);
		font-family: var(--form__field__error_font-family);
		font-size: var(--form__field__error_font-size);
		font-weight: var(--form__field__error_font-weight);
	}

	/* .form__field__input styles. */
	:where(.form__field) :global(:where(.form__field__input)) {
		background-color: var(--form__field__input_bg);
		border: var(--form__field__input_border-width) solid var(--form__field__input_border-color);
		color: var(--form__field__input_color);
		display: block;
		font-family: var(--form__field__input_font-family);
		font-size: var(--form__field__input_font-size);
		font-weight: var(--form__field__input_font-weight);
		margin-block: var(--form__field__input_spacing-y);
		padding: var(--form__field__input_padding-y) var(--form__field__input_padding-x);
		width: 100%;
	}

	:where(.inline) :global(:where(.form__field__input)) {
		display: inline-block;
	}

	:where(.error) :global(:where(.form__field__input)) {
		border-color: var(--form__field__error_color);
	}

	:where(.form__field) :global(:where(.form__field__input:focus)) {
		outline: var(--form__field__input_focus_outline-width) solid
			var(--form__field__input_focus_outline-color);
		outline-offset: var(--form__field__input_focus_outline-offset);
	}

	:where(.form__field) :global(:where(.form__field__input::placeholder)) {
		color: var(--form__field__input__placeholder_color);
	}

	:where(.form__field) :global(:where(.form__field__input::-ms-input-placeholder)) {
		color: var(--form__field__input__placeholder_color);
		opacity: 1;
	}
</style>
