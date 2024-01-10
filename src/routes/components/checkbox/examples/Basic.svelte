<script lang="ts">
	import { Form } from '$lib';

	let checked = $state(false);
</script>

<Form method="POST">
	<Form.Checkbox id="checkbox" name="checkbox" label="Checkbox" bind:checked />
</Form>
