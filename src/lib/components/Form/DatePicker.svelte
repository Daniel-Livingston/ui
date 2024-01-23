<script lang="ts">
	import Field from './Field.svelte';
	import type { DatePickerProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		required,
		value,
		...props
	} = $props<DatePickerProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<input type="date" class="form__field__input" bind:value {id} {...props} />
</Field>
