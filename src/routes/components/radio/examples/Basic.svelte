<script lang="ts">
	import { Form } from '$lib';

	let group = $state('radio-1');
</script>

<Form method="POST">
	<Form.Radio id="radio-1" name="radio[]" label="Radio 1" value="radio-1" bind:group />
	<Form.Radio id="radio-2" name="radio[]" label="Radio 2" value="radio-2" bind:group />
</Form>
