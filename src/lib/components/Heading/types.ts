import type { HTMLAttributes } from 'svelte/elements';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	id: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
