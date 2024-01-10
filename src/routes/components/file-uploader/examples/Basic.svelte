<script lang="ts">
	import { Form } from '$lib';

	let files = $state<FileList | undefined>();
</script>

<Form method="POST" enctype="multipart/form-data">
	<Form.FileUploader
		id="file"
		name="file"
		label="Upload a file"
		accept="image/jpeg, image/png"
		bind:files
	/>
</Form>
