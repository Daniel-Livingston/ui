<script lang="ts">
	import { navigating } from '$app/stores';

	import type { TableOfContentsProps } from './types';
	import TableOfContentsLink from './TableOfContentsLink.svelte';
	import TableOfContentsMenu from './TableOfContentsMenu.svelte';
	import { getTocItems } from './utils';

	let { auto, content, label = 'On this page', ...props } = $props<TableOfContentsProps>();

	let items = $derived($navigating ? getTocItems(content) : getTocItems(content));
</script>

<nav class="toc">
	<h2 class="toc__heading">{label}</h2>
	<ul class="toc__items" {...props}>
		{#if auto && items && items.length > 0}
			{#each items as { id, label, href, items: nestedItems } (id)}
				{#if nestedItems}
					<TableOfContentsMenu {href} {label}>
						{#each nestedItems as { id, label, href } (id)}
							<TableOfContentsLink {href}>{label}</TableOfContentsLink>
						{/each}
					</TableOfContentsMenu>
				{:else}
					<TableOfContentsLink {href}>{label}</TableOfContentsLink>
				{/if}
			{/each}
		{:else}
			<slot />
		{/if}
	</ul>
</nav>

<style>
	:global(:root) {
		--toc-heading-border-width: 1px;
		--toc-heading-font-family: var(--sans-serif);
		--toc-heading-font-size: var(--font-size-lg);
		--toc-heading-font-weight: 400;
		--toc-heading-line-height: 1.5;
		--toc-spacing-top: 1rem;

		--toc-item-spacing: 0.25rem;
		--toc-nested-item-padding-left: 1rem;

		--toc-link-color: var(--color-dark);
		--toc-link-font-family: var(--sans-serif);
		--toc-link-font-size: var(--font-size-md);
		--toc-link-font-weight: 400;
		--toc-link-line-height: 1.5;
		--toc-nested-link-spacing-x: 0.5rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--toc-heading-border-color: rgba(var(--color-dark-rgb), 0.2);
			--toc-heading-color: var(--color-dark);
			--toc-link-color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--toc-heading-border-color: rgba(var(--color-light-rgb), 0.2);
			--toc-heading-color: var(--color-light);
			--toc-link-color: var(--color-light);
		}
	}

	.toc {
		position: -webkit-sticky;
		position: sticky;
		top: var(--toc-spacing-top);
	}

	.toc__items {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.toc__heading {
		border-bottom: var(--toc-heading-border-width) solid var(--toc-heading-border-color);
		color: var(--toc-heading-color);
		font-family: var(--toc-heading-font-family);
		font-size: var(--toc-heading-font-size);
		font-weight: var(--toc-heading-font-weight);
		line-height: var(--toc-heading-line-height);
		margin-bottom: 0.5rem;
		padding-bottom: 0.5rem;
	}
</style>
