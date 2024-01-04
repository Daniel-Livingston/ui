import type { HTMLAttributes } from 'svelte/elements';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'small' | 'medium' | 'large';
}
