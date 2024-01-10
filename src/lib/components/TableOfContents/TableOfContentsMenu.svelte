<script lang="ts">
	import classNames from 'classnames';

	import TableOfContentsItem from './TableOfContentsItem.svelte';
	import TableOfContentsLink from './TableOfContentsLink.svelte';
	import type { TableOfContentsMenuProps } from './types';

	let { class: classname, href, label, ...props } = $props<TableOfContentsMenuProps>();
</script>

<TableOfContentsItem>
	<TableOfContentsLink {href}>{label}</TableOfContentsLink>

	<ul class={classNames('toc__menu', classname)} {...props}>
		<slot />
	</ul>
</TableOfContentsItem>

<style>
	.toc__menu {
		list-style: none;
		margin: 0;
		padding: 0;
		padding-left: var(--toc-nested-item-padding-left);
	}

	:global(*) + .toc__menu {
		padding-top: var(--toc-item-spacing);
	}
</style>
