<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo, fixCodeSnippet } from '$lib/internal';

	import Levels from './examples/Levels.svelte';
	import levelsCode from './examples/Levels.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text
	>All HTML headings, <CodeSnippet code="<h1>" inline /> through <CodeSnippet code="<h6>" inline /> are
	supported.</Text
>

<Demo>
	<Levels />
</Demo>

<CodeSnippet code={fixCodeSnippet(levelsCode)} lang="html" highlighted />
