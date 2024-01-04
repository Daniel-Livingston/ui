<script lang="ts">
	import './Code.css';
	import type { CodeProps } from './types';

	let { code, lang, highlighted = false, inline = false } = $props<CodeProps>();
</script>

{#snippet codeMarkdown(contents)}
	<pre class="code"><code class="hljs language-{lang}">{@html contents}</code></pre>
{/snippet}

{#if inline}
	<code class="code">{code}</code>
{:else if !highlighted}
	{@render codeMarkdown(code)}
{:else}
	{#await import('./highlight')}
		{@render codeMarkdown(code)}
	{:then { highlight }}
		{@render codeMarkdown(highlight(code, lang))}
	{/await}
{/if}
