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
		--code-tab-size: 2;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--code-bg: var(--color-white);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--code-bg: var(--color-black);
		}
	}

	pre.code {
		tab-size: var(--code-tab-size);
	}

	pre.code code {
		background-color: var(--code-bg);
	}
</style>
