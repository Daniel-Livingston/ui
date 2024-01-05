import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Size, Variant } from '$lib/internal/types';

export interface ButtonProps extends HTMLButtonAttributes {
	close?: boolean;
	rounded?: boolean;
	size?: Size;
	variant?: Variant;
}
