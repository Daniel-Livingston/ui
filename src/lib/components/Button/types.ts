import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface ButtonProps extends HTMLButtonAttributes {
	children: Snippet<void>;
	variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
