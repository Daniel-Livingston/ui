import type { HTMLAttributes, HTMLAnchorAttributes, HTMLMenuAttributes } from 'svelte/elements';

export interface SideNavProps extends HTMLMenuAttributes {}

export interface SideNavMenuProps extends HTMLAttributes<HTMLLIElement> {
	id: string;
	label: string;
	open?: boolean;
}

export interface SideNavLinkProps extends HTMLAnchorAttributes {
	href: string;
}
