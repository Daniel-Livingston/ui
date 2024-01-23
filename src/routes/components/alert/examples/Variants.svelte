<script lang="ts">
	import { Alert } from '$lib';
</script>

<div>
	<Alert variant="primary">This is a primary alert. It's providing feedback!</Alert>
	<Alert variant="secondary">This is a secondary alert. It's providing feedback!</Alert>
	<Alert variant="success">This is a success alert. It's providing feedback!</Alert>
	<Alert variant="danger">This is a danger alert. It's providing feedback!</Alert>
	<Alert variant="warning">This is a warning alert. It's providing feedback!</Alert>
	<Alert variant="info">This is a info alert. It's providing feedback!</Alert>
	<Alert variant="light">This is a light alert. It's providing feedback!</Alert>
	<Alert variant="dark">This is a dark alert. It's providing feedback!</Alert>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
