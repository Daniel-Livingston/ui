<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import styles from '$lib/styles.css?raw';

	const themeStyles = styles.match(/\/\* Colors and theming\. \*\/\n(:root {\n[^}]+})/)![1];

	const typographyStyles = styles.match(/\/\* Typography\. \*\/\n(:root {\n[^}]+})/)![1];
</script>

<Heading level={2}>Overview</Heading>

<Text>
	This UI library includes many CSS variables that can be overridden to customize the look and feel
	of the components.
</Text>

<Text>
	These variables include those that are used to define the base theme colors, typography, spacing,
	and more.
</Text>

<Heading level={2}>Theme Variables</Heading>

<Text>
	The following variables are used to define the base theme colors. Their defaults are also
	included.
</Text>

<CodeSnippet code={themeStyles} lang="css" highlighted />

<Text>
	The following variables are used to define the base theme typography. Their defaults are also
	included.
</Text>

<CodeSnippet code={typographyStyles} lang="css" highlighted />
