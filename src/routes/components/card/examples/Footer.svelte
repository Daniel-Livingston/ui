<script lang="ts">
	import { Button, Card } from '$lib';
</script>

<Card title="Card Heading">
	{#snippet header()}
		A header
	{/snippet}

	This has some basic text within a Card component.

	<div>
		<Button variant="primary">Contact us</Button>
	</div>

	{#snippet footer()}
		Yesterday
	{/snippet}
</Card>

<style>
	div {
		margin-top: 1rem;
	}
</style>
