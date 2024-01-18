<script lang="ts">
	import { highlight } from './highlight';
	import type { CodeProps } from './types';

	let { code, lang, highlighted = false, inline = false } = $props<CodeProps>();
</script>

{#snippet codeMarkdown(contents)}
	<pre class="code"><code class="hljs language-{lang}">{@html contents}</code></pre>
{/snippet}

{#if inline}
	<code class="code">{code}</code>
{:else if highlighted}
	{@render codeMarkdown(highlight(code, lang))}
{:else}
	{@render codeMarkdown(code)}
{/if}

<style>
	:global(:root) {
		--code-bg: var(--body-bg);
		--code-tab-size: 2;
	}

	pre.code {
		tab-size: var(--code-tab-size);
	}

	pre.code code {
		background-color: var(--code-bg);
	}
</style>
