<script lang="ts">
	import { Form } from '$lib';

	let name = $state('');
</script>

<Form method="POST">
	<Form.TextInput
		id="name"
		name="name"
		label="Name"
		description="Include your first and last name."
		placeholder="Enter your name..."
		required
		bind:value={name}
	/>
</Form>
