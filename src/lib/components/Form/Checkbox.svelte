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
	class={classNames('form__checkbox', classname)}
	{description}
	{error}
	{id}
	{label}
	{required}
	inline
	reverse
>
	<input type="checkbox" class="form__field__input" bind:checked {id} {...props} />
</Field>

<style>
	.form__field__input {
		margin: 0;
		height: 1rem;
		width: 1rem;
	}
</style>
