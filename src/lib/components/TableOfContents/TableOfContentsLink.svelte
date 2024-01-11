<script lang="ts">
	import TableOfContentsItem from './TableOfContentsItem.svelte';
	import TableOfContentsAnchor from './TableOfContentsAnchor.svelte';
	import type { TableOfContentsLinkProps } from './types';

	let { ...props } = $props<TableOfContentsLinkProps>();
</script>

<TableOfContentsItem>
	<TableOfContentsAnchor {...props} />
</TableOfContentsItem>
