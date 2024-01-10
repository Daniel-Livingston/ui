<script lang="ts">
	import { Form } from '$lib';

	let number = $state<number | undefined>(undefined);
</script>

<Form method="POST">
	<Form.NumberInput
		id="number"
		name="number"
		label="Number"
		description="Pick a number between 1 and 10."
		placeholder="Enter a number..."
		error="This field is required."
		min={1}
		max={10}
		step={1}
		required
		bind:value={number}
	/>
</Form>
