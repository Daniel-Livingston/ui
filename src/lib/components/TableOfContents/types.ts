import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes, HTMLMenuAttributes } from 'svelte/elements';

export interface TableOfContentsProps extends HTMLMenuAttributes {
	children: Snippet;
	label?: string;
}

export interface TableOfContentsMenuProps extends HTMLAttributes<HTMLUListElement> {
	href: string;
	label: string;
}

export interface TableOfContentsLinkProps extends HTMLAnchorAttributes {
	href: string;
}
