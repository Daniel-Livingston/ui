<script lang="ts">
	import { Form } from '$lib';

	let name = $state('');

	$inspect(name);
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
