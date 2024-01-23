<script lang="ts">
	import { highlight } from './highlight';
	import type { CodeProps } from './types';

	let { code, lang, highlighted = false, inline = false } = $props<CodeProps>();
</script>

{#snippet codeMarkdown(contents)}
	<pre class="code multiline"><code class="hljs language-{lang}">{@html contents}</code></pre>
{/snippet}

{#if inline}
	<code class="code inline">{code}</code>
{:else if highlighted}
	{@render codeMarkdown(highlight(code, lang))}
{:else}
	{@render codeMarkdown(code)}
{/if}

<style>
	:global(:root) {
		--code_bg: var(--body-bg);
		--code_tab-size: 2;
	}

	:where(.multiline) {
		tab-size: var(--code_tab-size);
	}

	:where(.multiline > code) {
		background-color: var(--code_bg);
	}
</style>
