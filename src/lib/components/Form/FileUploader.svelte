<script lang="ts">
	import Field from './Field.svelte';
	import type { FileUploaderProps } from './types';

	let {
		class: classname,
		description,
		error,
		files,
		id,
		label,
		required,
		...props
	} = $props<FileUploaderProps>();
</script>

<Field class={classname} {description} {error} {id} {label} {required}>
	<input type="file" class="form__input" {id} bind:files {...props} />
</Field>
