<script lang="ts">
	import { TableOfContents as TOC } from '$lib/components';
	import { slugify } from '$lib/internal/utils';
	import type { TableOfContentsProps } from './types';

	let { items, label } = $props<TableOfContentsProps>();
</script>

{#if items}
	<TOC {label}>
		{#each items as item (typeof item === 'string' ? slugify(item) : item.label)}
			{#if typeof item === 'object'}
				{@const label = item.label}
				{@const id = item.id || slugify(label)}
				{@const href = item.href || `#${id}`}

				{#if item.items && item.items.length > 0}
					<TOC.Menu {href} {label}>
						{#each item.items as nestedItem}
							{#if typeof nestedItem === 'string'}
								{@const label = nestedItem}
								{@const id = slugify(label)}
								{@const href = `#${id}`}

								<TOC.Link {href}>{label}</TOC.Link>
							{:else}
								{@const label = nestedItem.label}
								{@const id = nestedItem.id || slugify(label)}
								{@const href = nestedItem.href || `#${id}`}

								<TOC.Link {href}>{label}</TOC.Link>
							{/if}
						{/each}
					</TOC.Menu>
				{/if}
			{:else}
				{@const label = item}
				{@const id = slugify(label)}
				{@const href = `#${id}`}

				<TOC.Link {href}>{label}</TOC.Link>
			{/if}
		{/each}
	</TOC>
{/if}
