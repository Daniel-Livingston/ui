<script lang="ts">
	import Field from './Field.svelte';
	import type { TextInputProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		required,
		value,
		...props
	} = $props<TextInputProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<input type="text" class="form__field__input" bind:value {id} {...props} />
</Field>
