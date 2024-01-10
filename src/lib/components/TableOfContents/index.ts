import TableOfContents from './TableOfContents.svelte';
import TableOfContentsLink from './TableOfContentsLink.svelte';
import TableOfContentsMenu from './TableOfContentsMenu.svelte';

const TableOfContentsContainer = Object.assign(TableOfContents, {
	Link: TableOfContentsLink,
	Menu: TableOfContentsMenu
});

export { TableOfContentsContainer as TableOfContents };
