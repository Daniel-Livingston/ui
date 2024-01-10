<script lang="ts">
	import classNames from 'classnames';

	import TableOfContentsItem from './TableOfContentsItem.svelte';
	import type { TableOfContentsLinkProps } from './types';

	let { class: classname, ...props } = $props<TableOfContentsLinkProps>();
</script>

<TableOfContentsItem>
	<a class={classNames('toc__link', classname)} {...props}><slot /></a>
</TableOfContentsItem>

<style>
	.toc__link {
		color: var(--toc-link-color);
		display: block;
		font-family: var(--toc-link-font-family);
		font-size: var(--toc-link-font-size);
		font-weight: var(--toc-link-font-weight);
		line-height: var(--toc-link-line-height);
		text-decoration: none;
	}
</style>
