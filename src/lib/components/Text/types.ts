import type { HTMLAttributes } from 'svelte/elements';
import type { Size } from '$lib/internal/types';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: Size;
}
