import type { HTMLAttributes } from 'svelte/elements';
import type { Size, Variant } from '$lib/internal/types';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	size?: Size;
	variant?: Variant;
}
