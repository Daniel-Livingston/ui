<script lang="ts">
	import { CodeSnippet, Heading } from '$lib';
	import { Demo } from '$lib/internal';

	import Basic from './examples/Basic.svelte';
	import basicCode from './examples/Basic.svelte?raw';

	import Full from './examples/Full.svelte';
	import fullCode from './examples/Full.svelte?raw';
</script>

<Heading level={2}>Usage</Heading>

<Heading level={3}>Basic</Heading>

<Demo>
	<Basic />
</Demo>
<CodeSnippet code={basicCode} lang="html" highlighted />

<Heading level={3}>Options</Heading>

<Demo>
	<Full />
</Demo>
<CodeSnippet code={fullCode} lang="html" highlighted />
