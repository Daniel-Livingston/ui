import type { Snippet } from 'svelte';
import type { TOCItem } from '$lib/internal/types';

export interface LayoutProps {
	children: Snippet;
	title: string;
	description: string;
}

export interface SideNavProps {}

export interface TableOfContentsProps {
	items?: TOCItem[];
	label?: string;
}
