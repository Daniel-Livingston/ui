import type { HTMLAttributes } from 'svelte/elements';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}
