import type { HTMLButtonAttributes } from 'svelte/elements';

export interface Props extends HTMLButtonAttributes {
	variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
