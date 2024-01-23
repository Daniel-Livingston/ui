<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo } from '$lib/internal/site/components';
	import { fixCodeSnippet } from '$lib/internal/utils';

	import Variants from './examples/SupportedVariants.svelte';
	import variantsCode from './examples/SupportedVariants.svelte?raw';

	import Sizes from './examples/SupportedSizes.svelte';
	import sizesCode from './examples/SupportedSizes.svelte?raw';

	import Rounded from './examples/Rounded.svelte';
	import roundedCode from './examples/Rounded.svelte?raw';

	import Disabled from './examples/Disabled.svelte';
	import disabledCode from './examples/Disabled.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	Buttons are used to provide the user with ways of interacting with the page. Buttons come in many
	different styles and can be customized entirely.
</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Heading id="variants" level={3}>Variants</Heading>

<Demo>
	<Variants />
</Demo>

<CodeSnippet code={fixCodeSnippet(variantsCode)} lang="html" highlighted />

<Heading id="sizes" level={3}>Sizes</Heading>

<Demo>
	<Sizes />
</Demo>

<CodeSnippet code={fixCodeSnippet(sizesCode)} lang="html" highlighted />

<Heading id="rounded" level={3}>Rounded</Heading>

<Demo>
	<Rounded />
</Demo>

<CodeSnippet code={fixCodeSnippet(roundedCode)} lang="html" highlighted />

<Heading id="disabled" level={3}>Disabled</Heading>

<Demo>
	<Disabled />
</Demo>

<CodeSnippet code={fixCodeSnippet(disabledCode)} lang="html" highlighted />
