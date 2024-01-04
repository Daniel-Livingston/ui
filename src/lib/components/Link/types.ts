import type { HTMLAnchorAttributes } from 'svelte/elements';

export interface LinkProps extends HTMLAnchorAttributes {
	href: string;
}
