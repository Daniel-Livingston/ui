<script lang="ts">
	import { page } from '$app/stores';

	import { CodeSnippet, Heading } from '$lib';

	let { cssVariableAPI } = $derived($page.data);
</script>

<slot />

{#if cssVariableAPI}
	<Heading id="api" level={2}>API</Heading>

	<Heading id="css-variables" level={3}>CSS Variables</Heading>

	<CodeSnippet code={cssVariableAPI} lang="css" highlighted />
{/if}
