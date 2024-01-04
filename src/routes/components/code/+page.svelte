<script lang="ts">
	import { CodeSnippet, Demo, Heading, Text } from '$lib';
	import example1 from './examples/usage-1.html?raw';
	import example2 from './examples/usage-2.html?raw';
	import 'highlight.js/styles/default.css';
</script>

<Text size="xl">Code snippets are used to display code examples, typically in documentation.</Text>

<Heading level={2}>Overview</Heading>

<Text>
	There are three different variants of code snippets: inline, multi-line, and multi-line
	highlighted.
</Text>

<Heading level={3}>Variants</Heading>

<Text>Todo: Insert table.</Text>

<Heading level={2}>Usage</Heading>

<Text>
	The most common use for this component is to output a code snippet into documentation that the
	user can reference. Say we want to output the following multi-line code snippet into our
	documentation:
</Text>

<div style:--padding-block-start-code="0">
	<Demo>
		<CodeSnippet
			code={`function add(a: number, b: number): number {
	return a + b;
}`}
			lang="typescript"
			highlighted
		/>
	</Demo>
</div>

<Text>We will want to use the following code:</Text>

<CodeSnippet code={example1} lang="html" highlighted />

<Text>
	Another common use case is to include a bit of inline code in the middle of our text. We can use
	the following to accomplish this:
</Text>

<CodeSnippet code={example2} lang="html" highlighted />
