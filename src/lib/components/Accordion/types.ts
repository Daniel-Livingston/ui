import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet<void>;
	headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet<void>;
	id: string;
	label: string;
	open?: boolean;
}

export interface AccordionHeaderProps {
	children: Snippet<void>;
	ref: HTMLButtonElement | undefined;
	open: boolean;
}

export interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet<void>;
	controller: HTMLButtonElement | undefined;
	open: boolean;
}
