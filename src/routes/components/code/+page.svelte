<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo } from '$lib/internal/site/components';
	import MultilineExample from './examples/Multiline.svelte';
	import multilineExampleCode from './examples/Multiline.svelte?raw';
	import InlineExample from './examples/Inline.svelte';
	import inlineExampleCode from './examples/Inline.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	There are three different variants of code snippets: inline, multi-line, and multi-line
	highlighted.
</Text>

<Heading id="variants" level={3}>Variants</Heading>

<Text>Todo: Insert table.</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Text>
	The most common use for this component is to output a code snippet into documentation that the
	user can reference. Say we want to output the following multi-line code snippet into our
	documentation:
</Text>

<Demo>
	<MultilineExample />
</Demo>

<CodeSnippet code={multilineExampleCode} lang="html" highlighted />

<Text>
	Another common use case is to include a bit of inline code in the middle of our text. We can use
	the following to accomplish this:
</Text>

<Demo>
	<InlineExample />
</Demo>

<CodeSnippet code={inlineExampleCode} lang="html" highlighted />
