import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Variant } from '$lib/internal/types';

export interface ButtonProps extends HTMLButtonAttributes {
	close?: boolean;
	variant?: Variant;
}
