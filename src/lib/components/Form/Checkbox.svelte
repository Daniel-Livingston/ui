<script lang="ts">
	import classNames from 'classnames';

	import Field from './Field.svelte';
	import type { CheckboxProps } from './types';

	let {
		checked,
		class: classname,
		description,
		error,
		id,
		label,
		required,
		...props
	} = $props<CheckboxProps>();
</script>

<Field
	class={classNames('form__field-checkbox', classname)}
	{description}
	{error}
	{id}
	{label}
	{required}
	inline
	reverse
>
	<input type="checkbox" class="form__input form__checkbox" bind:checked {id} {...props} />
</Field>

<style>
	:global(:root) {
		--form-checkbox-font-weight: 400;
		--form-checkbox-gap: 0.25rem;
	}

	:global(.form__field.form__field-checkbox .form__label) {
		font-weight: var(--form-checkbox-font-weight);
	}

	:global(.form__field-checkbox + .form__field.form__field-checkbox) {
		margin-top: var(--form-checkbox-gap);
	}

	.form__input.form__checkbox {
		margin: 0;
		height: 1rem;
		width: 1rem;
	}
</style>
