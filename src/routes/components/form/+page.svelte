<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo } from '$lib/internal';

	import InputShowcase from './examples/InputShowcase.svelte';
	import inputShowcaseCode from './examples/InputShowcase.svelte?raw';
</script>

<Heading level={2}>Overview</Heading>

<Heading level={2}>Usage</Heading>

<Demo>
	<InputShowcase />
</Demo>

<CodeSnippet code={inputShowcaseCode} lang="html" highlighted />
