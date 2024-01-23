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
	<input type="radio" class="form__field__input form__radio" bind:group {id} {...props} />
</Field>

<style>
	.form__field__input {
		margin: 0;
		height: 1rem;
		width: 1rem;
	}
</style>
