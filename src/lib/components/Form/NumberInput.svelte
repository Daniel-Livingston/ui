<script lang="ts">
	import Field from './Field.svelte';
	import type { NumberInputProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		required,
		value,
		...props
	} = $props<NumberInputProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<input type="number" class="form__field__input" bind:value {id} {...props} />
</Field>
