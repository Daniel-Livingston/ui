import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes, HTMLMenuAttributes } from 'svelte/elements';

interface BaseTableOfContentsProps extends HTMLMenuAttributes {
	label?: string;
}

interface AutoTableOfContentsProps extends Omit<BaseTableOfContentsProps, 'children'> {
	auto: true;
	content: HTMLElement;
}

interface ManualTableOfContentsProps extends BaseTableOfContentsProps {
	children: Snippet;
	content?: never;
	auto?: false;
}

export type TableOfContentsProps = AutoTableOfContentsProps | ManualTableOfContentsProps;

export interface TableOfContentsMenuProps extends HTMLAttributes<HTMLUListElement> {
	href: string;
	label: string;
}

export interface TableOfContentsLinkProps extends HTMLAnchorAttributes {
	href: string;
}
