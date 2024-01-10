<script lang="ts">
	import { Form } from '$lib';

	let name = $state('');
</script>

<Form method="POST">
	<Form.TextInput
		id="name"
		name="name"
		label="Name"
		placeholder="Enter your name..."
		bind:value={name}
	/>
</Form>
