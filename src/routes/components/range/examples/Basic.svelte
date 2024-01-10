<script lang="ts">
	import { Form } from '$lib';

	let number = $state(5);
</script>

<Form method="POST">
	<Form.Range
		id="number"
		name="number"
		label="Number"
		placeholder="Enter a number..."
		min={1}
		max={10}
		step={1}
		bind:value={number}
	/>
</Form>
