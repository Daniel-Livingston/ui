<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo } from '$lib/internal/site/components';
	import { fixCodeSnippet } from '$lib/internal/utils';

	import Example1 from './examples/BasicUsage.svelte';
	import example1Code from './examples/BasicUsage.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	An accordion is a collection of collapsible panels. Each panel consists of a header and a body.
	The header is used to identify the panel and can be clicked to toggle the visibility of the body.
</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Text>Click the accordion headings below to expand/collapse the accordion content.</Text>

<Demo>
	<Example1 />
</Demo>

<CodeSnippet code={fixCodeSnippet(example1Code)} lang="html" highlighted />
