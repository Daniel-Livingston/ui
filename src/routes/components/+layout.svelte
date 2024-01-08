<script lang="ts">
	import { page } from '$app/stores';

	import { CodeSnippet, Heading } from '$lib';

	let { cssVariableAPI } = $derived($page.data);
</script>

<slot />

<Heading level={2}>API</Heading>

{#if cssVariableAPI}
	<Heading level={3}>CSS Variables</Heading>

	<CodeSnippet code={cssVariableAPI} lang="css" highlighted />
{/if}
