import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	header?: Snippet<void>;
	footer?: Snippet<void>;
	image?: Snippet<void>;
	rounded?: boolean;
	subtitle?: string;
	title?: string;
	titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
