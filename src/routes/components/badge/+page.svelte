<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';

	import { Demo, fixCodeSnippet, getCssVariables } from '$lib/internal';

	import SupportedVariantsExample from './examples/SupportedVariants.svelte';
	import supportedVariantsExampleCode from './examples/SupportedVariants.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	Badges can be used to provide a bit of extra information to the user. They can be used to show the
	status of an item, or to show the number of items in a list, for example.
</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Heading id="variants" level={3}>Variants</Heading>

<Demo>
	<SupportedVariantsExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(supportedVariantsExampleCode)} lang="html" highlighted />
