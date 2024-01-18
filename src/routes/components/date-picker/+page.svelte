<script lang="ts">
	import { CodeSnippet, Heading } from '$lib';
	import { Demo } from '$lib/internal/site/components';

	import Basic from './examples/Basic.svelte';
	import basicCode from './examples/Basic.svelte?raw';
</script>

<Heading id="usage" level={2}>Usage</Heading>

<Heading id="basic" level={3}>Basic</Heading>

<Demo>
	<Basic />
</Demo>
<CodeSnippet code={basicCode} lang="html" highlighted />
