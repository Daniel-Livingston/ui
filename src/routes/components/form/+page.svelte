<script lang="ts">
	import { CodeSnippet, Heading } from '$lib';
	import { Demo } from '$lib/internal/site/components';

	import InputShowcase from './examples/InputShowcase.svelte';
	import inputShowcaseCode from './examples/InputShowcase.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Heading id="usage" level={2}>Usage</Heading>

<Demo>
	<InputShowcase />
</Demo>

<CodeSnippet code={inputShowcaseCode} lang="html" highlighted />
