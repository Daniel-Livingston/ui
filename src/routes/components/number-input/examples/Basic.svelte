<script lang="ts">
	import { Form } from '$lib';

	let number = $state<number | undefined>(undefined);
</script>

<Form method="POST">
	<Form.NumberInput
		id="number"
		name="number"
		label="Number"
		placeholder="Enter a number..."
		min={0}
		max={10}
		step={1}
		bind:value={number}
	/>
</Form>
