<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import { Demo } from '$lib/internal/site/components';
	import { fixCodeSnippet } from '$lib/internal/utils';

	import Variants from './examples/Variants.svelte';
	import variantsCode from './examples/Variants.svelte?raw';
	import Icons from './examples/Icons.svelte';
	import iconsCode from './examples/Icons.svelte?raw';
	import Dismissible from './examples/Dismissible.svelte';
	import dismissibleCode from './examples/Dismissible.svelte?raw';
</script>

<Heading id="overview" level={2}>Overview</Heading>

<Text>
	Alerts are used to provide feedback to the user. They can be used to indicate that an action was
	successful, that an action requires attention, or that an action has failed.
</Text>

<Heading id="usage" level={2}>Usage</Heading>

<Heading id="variants" level={3}>Variants</Heading>

<Demo>
	<Variants />
</Demo>

<CodeSnippet code={fixCodeSnippet(variantsCode)} lang="html" highlighted />

<Heading id="with-icons" level={3}>With Icons</Heading>

<Demo>
	<Icons />
</Demo>

<CodeSnippet code={fixCodeSnippet(iconsCode)} lang="html" highlighted />

<Heading id="dismissible" level={3}>Dismissible</Heading>

<Demo>
	<Dismissible />
</Demo>

<CodeSnippet code={fixCodeSnippet(dismissibleCode)} lang="html" highlighted />
