<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo, fixCodeSnippet, getCssVariables } from '$lib/internal';

	import SupportedVariantsExample from './examples/SupportedVariants.svelte';
	import supportedVariantsExampleCode from './examples/SupportedVariants.svelte?raw';

	import SupportedSizes from './examples/SupportedSizes.svelte';
	import supportedSizesCode from './examples/SupportedSizes.svelte?raw';

	import RoundedExample from './examples/Rounded.svelte';
	import roundedExampleCode from './examples/Rounded.svelte?raw';

	import DisabledExample from './examples/Disabled.svelte';
	import disabledExampleCode from './examples/Disabled.svelte?raw';
</script>

<Heading level={2}>Overview</Heading>

<Text>
	Buttons are used to provide the user with ways of interacting with the page. Buttons come in many
	different styles and can be customized entirely.
</Text>

<Heading level={2}>Usage</Heading>

<Heading level={3}>Variants</Heading>

<Demo>
	<SupportedVariantsExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(supportedVariantsExampleCode)} lang="html" highlighted />

<Heading level={3}>Sizes</Heading>

<Demo>
	<SupportedSizes />
</Demo>

<CodeSnippet code={fixCodeSnippet(supportedSizesCode)} lang="html" highlighted />

<Heading level={3}>Rounded</Heading>

<Demo>
	<RoundedExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(roundedExampleCode)} lang="html" highlighted />

<Heading level={3}>Disabled</Heading>

<Demo>
	<DisabledExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(disabledExampleCode)} lang="html" highlighted />
