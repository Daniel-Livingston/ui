<script lang="ts">
	import { Form } from '$lib';

	let date = $state('');
</script>

<Form method="POST">
	<Form.DatePicker id="date" name="date" label="Date" bind:value={date} />
</Form>
