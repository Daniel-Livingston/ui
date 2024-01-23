<script lang="ts">
	import { Badge } from '$lib';
</script>

<div>
	<Badge variant="primary">Default</Badge>
	<Badge size="xs" variant="primary">XS Badge</Badge>
	<Badge size="sm" variant="primary">SM Badge</Badge>
	<Badge size="md" variant="primary">MD Badge</Badge>
	<Badge size="lg" variant="primary">LG Badge</Badge>
	<Badge size="xl" variant="primary">XL Badge</Badge>
</div>

<style>
	div > :global(.badge + .badge) {
		margin-inline-start: 0.25rem;
	}
</style>
