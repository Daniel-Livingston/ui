<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo, fixCodeSnippet, getCssVariables } from '$lib/internal';

	import SupportedVariantsExample from './examples/SupportedVariants.svelte';
	import supportedVariantsExampleCode from './examples/SupportedVariants.svelte?raw';
	import WithIconsExample from './examples/WithIcons.svelte';
	import withIconsExampleCode from './examples/WithIcons.svelte?raw';
	import DismissibleExample from './examples/Dismissible.svelte';
	import dismissibleExampleCode from './examples/Dismissible.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	Alerts are used to provide feedback to the user. They can be used to indicate that an action was
	successful, that an action requires attention, or that an action has failed.
</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Heading id="variants" level={3}>Variants</Heading>

<Demo>
	<SupportedVariantsExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(supportedVariantsExampleCode)} lang="html" highlighted />

<Heading id="with-icons" level={3}>With Icons</Heading>

<Demo>
	<WithIconsExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(withIconsExampleCode)} lang="html" highlighted />

<Heading id="dismissible" level={3}>Dismissible</Heading>

<Demo>
	<DismissibleExample />
</Demo>

<CodeSnippet code={fixCodeSnippet(dismissibleExampleCode)} lang="html" highlighted />
