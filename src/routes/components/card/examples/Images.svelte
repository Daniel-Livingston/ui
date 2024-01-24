<script lang="ts">
	import { Card } from '$lib';

	let imgHeight = 190;
	let imgWidth = 288;
</script>

<div>
	<Card title="Card Heading" subtitle="This is a basic card.">
		{#snippet image()}
			<img
				src="https://placehold.co/{imgWidth}x{imgHeight}"
				alt="A placeholder"
				width={imgWidth}
				height={imgHeight}
				loading="lazy"
			/>
		{/snippet}

		This has some basic text within a Card component.
	</Card>
</div>

<style>
	div > :global(.card) {
		max-width: 288px;
	}
</style>
