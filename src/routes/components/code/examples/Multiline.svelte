<script lang="ts">
	import { CodeSnippet } from '$lib';

	const code = `function add(a: number, b: number): number {
	return a + b;
}`;
</script>

<CodeSnippet {code} lang="typescript" highlighted />
