<script lang="ts">
	import { Button } from '$lib';
</script>

<div>
	<Button>No variant</Button>
	<Button variant="primary">Primary</Button>
	<Button variant="secondary">Secondary</Button>
	<Button variant="success">Success</Button>
	<Button variant="danger">Danger</Button>
	<Button variant="warning">Warning</Button>
	<Button variant="info">Info</Button>
	<Button variant="light">Light</Button>
	<Button variant="dark">Dark</Button>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
