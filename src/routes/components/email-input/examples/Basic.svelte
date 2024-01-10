<script lang="ts">
	import { Form } from '$lib';

	let email = $state('');
</script>

<Form method="POST">
	<Form.EmailInput
		id="email"
		name="email"
		label="Email address"
		placeholder="Enter your email address..."
		bind:value={email}
	/>
</Form>
