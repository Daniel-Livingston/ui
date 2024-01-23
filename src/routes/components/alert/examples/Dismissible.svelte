<script lang="ts">
	import { Alert } from '$lib';
</script>

<div>
	<Alert variant="primary" dismissible>This is a primary alert. It's providing feedback!</Alert>
	<Alert variant="secondary" dismissible>This is a secondary alert. It's providing feedback!</Alert>
	<Alert variant="success" dismissible>This is a success alert. It's providing feedback!</Alert>
	<Alert variant="danger" dismissible>This is a danger alert. It's providing feedback!</Alert>
	<Alert variant="warning" dismissible>This is a warning alert. It's providing feedback!</Alert>
	<Alert variant="info" dismissible>This is a info alert. It's providing feedback!</Alert>
	<Alert variant="light" dismissible>This is a light alert. It's providing feedback!</Alert>
	<Alert variant="dark" dismissible>This is a dark alert. It's providing feedback!</Alert>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
