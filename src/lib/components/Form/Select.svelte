<script lang="ts">
	import Field from './Field.svelte';
	import type { SelectProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		required,
		value,
		...props
	} = $props<SelectProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<select class="form__input form__select" {id} bind:value {...props}>
		<slot />
	</select>
</Field>

<style>
	.form__select {
		padding: var(--form-input-padding-y) calc(var(--form-input-padding-x) - 0.25rem);
	}
</style>
