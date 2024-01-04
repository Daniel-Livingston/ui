<script lang="ts">
	import { CodeSnippet, Heading, Text } from '$lib';
	import 'highlight.js/styles/default.css';
</script>

<Heading level={1}>Code snippet</Heading>

<Text size="large">
	Code snippets are used to display code examples, typically in documentation.
</Text>

<CodeSnippet
	code={`{
	"scripts": {
		"build": "lerna run build --stream --prefix --npm-client yarn",
		"ci-check": "carbon-cli ci-check",
		"clean": "lerna run clean && lerna clean --yes && rimraf node_modules",
		"doctoc": "doctoc --title '## Table of Contents'",
		"format": "prettier --write '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**'",
		"format:diff": "prettier --list-different '**/*.{js,md,scss,ts}' '!**/{build,es,lib,storybook,ts,umd}/**' '!packages/components/**'",
		"lint": "eslint actions config codemods packages",
		"lint:styles": "stylelint '**/*.{css,scss}' --report-needless-disables --report-invalid-scope-disables",
		"sync": "carbon-cli sync",
		"test": "cross-env BABEL_ENV=test jest",
		"test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns='examples,/packages/components/,/packages/react/'"
	},
	"resolutions": {
		"react": "~16.9.0",
		"react-dom": "~16.9.0",
		"react-is": "~16.9.0",
		"react-test-renderer": "~16.9.0"
	}
}`}
	lang="json"
	highlighted
/>

<Heading level={2}>Overview</Heading>

<Text>There are three different variants of code snippets.</Text>
