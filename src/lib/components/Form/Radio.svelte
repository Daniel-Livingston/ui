<script lang="ts">
	import classNames from 'classnames';

	import Field from './Field.svelte';
	import type { RadioProps } from './types';

	let {
		class: classname,
		description,
		error,
		group,
		id,
		label,
		required,
		...props
	} = $props<RadioProps>();
</script>

<Field
	class={classNames('form__field-radio', classname)}
	{description}
	{error}
	{id}
	{label}
	{required}
	inline
	reverse
>
	<input type="radio" class="form__input form__radio" bind:group {id} {...props} />
</Field>

<style>
	:global(:root) {
		--form-radio-font-weight: 400;
		--form-radio-gap: 0.25rem;
	}

	:global(.form__field.form__field-radio .form__label) {
		font-weight: var(--form-radio-font-weight);
	}

	:global(.form__field-radio + .form__field.form__field-radio) {
		margin-top: var(--form-radio-gap);
	}

	.form__input.form__radio {
		margin: 0;
		height: 1rem;
		width: 1rem;
	}
</style>
