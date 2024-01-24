<script lang="ts">
	import { CodeSnippet, Heading } from '$lib';
	import { Demo } from '$lib/internal/site/components';
	import { fixCodeSnippet } from '$lib/internal/utils';

	import Basic from './examples/Basic.svelte';
	import basicCode from './examples/Basic.svelte?raw';

	import Title from './examples/Title.svelte';
	import titleCode from './examples/Title.svelte?raw';

	import Subtitle from './examples/Subtitle.svelte';
	import subtitleCode from './examples/Subtitle.svelte?raw';

	import Rounded from './examples/Rounded.svelte';
	import roundedCode from './examples/Rounded.svelte?raw';

	import Header from './examples/Header.svelte';
	import headerCode from './examples/Header.svelte?raw';

	import Footer from './examples/Footer.svelte';
	import footerCode from './examples/Footer.svelte?raw';

	import Images from './examples/Images.svelte';
	import imagesCode from './examples/Images.svelte?raw';
</script>

<Heading level={2}>Overview</Heading>

<Heading level={2}>Usage</Heading>

<Heading level={3}>Basic</Heading>
<Demo>
	<Basic />
</Demo>
<CodeSnippet code={fixCodeSnippet(basicCode)} lang="html" highlighted />

<Heading level={3}>Headings</Heading>
<Demo>
	<Title />
</Demo>
<CodeSnippet code={fixCodeSnippet(titleCode)} lang="html" highlighted />

<Heading level={3}>Subtitle</Heading>
<Demo>
	<Subtitle />
</Demo>
<CodeSnippet code={fixCodeSnippet(subtitleCode)} lang="html" highlighted />

<Heading level={3}>Rounded</Heading>
<Demo>
	<Rounded />
</Demo>
<CodeSnippet code={fixCodeSnippet(roundedCode)} lang="html" highlighted />

<Heading level={3}>Header</Heading>
<Demo>
	<Header />
</Demo>
<CodeSnippet code={fixCodeSnippet(headerCode)} lang="html" highlighted />

<Heading level={3}>Footer</Heading>
<Demo>
	<Footer />
</Demo>
<CodeSnippet code={fixCodeSnippet(footerCode)} lang="html" highlighted />

<Heading level={3}>Images</Heading>
<Demo>
	<Images />
</Demo>
<CodeSnippet code={fixCodeSnippet(imagesCode)} lang="html" highlighted />
