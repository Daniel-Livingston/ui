<script lang="ts">
	import { Form } from '$lib';

	let option = $state('');
</script>

<Form method="POST">
	<Form.Select id="select" name="select" label="Select an option" bind:value={option}>
		<Form.Option value={1} selected>Option 1</Form.Option>
		<Form.Option value={2} selected>Option 2</Form.Option>
		<Form.Option value={3} selected>Option 3</Form.Option>
	</Form.Select>
</Form>
