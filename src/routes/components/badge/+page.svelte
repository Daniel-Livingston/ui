<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';

	import { Demo } from '$lib/internal/site/components';
	import { fixCodeSnippet } from '$lib/internal/utils';

	import Variants from './examples/Variants.svelte';
	import variantsCode from './examples/Variants.svelte?raw';

	import Sizes from './examples/Sizes.svelte';
	import sizesCode from './examples/Sizes.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	Badges can be used to provide a bit of extra information to the user. They can be used to show the
	status of an item, or to show the number of items in a list, for example.
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
