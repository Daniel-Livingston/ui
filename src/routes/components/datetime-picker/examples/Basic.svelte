<script lang="ts">
	import { Form } from '$lib';

	let datetime = $state('');
</script>

<Form method="POST">
	<Form.DateTimePicker id="date" name="date" label="Date" bind:value={datetime} />
</Form>
