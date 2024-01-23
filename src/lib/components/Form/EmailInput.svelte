<script lang="ts">
	import Field from './Field.svelte';
	import type { EmailInputProps } from './types';

	let {
		class: classname,
		description,
		error,
		id,
		label,
		required,
		value,
		...props
	} = $props<EmailInputProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<input type="email" class="form__field__input" bind:value {id} {...props} />
</Field>
