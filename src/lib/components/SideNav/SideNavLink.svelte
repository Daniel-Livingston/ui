<script lang="ts">
	import classNames from 'classnames';

	import SideNavItem from './SideNavItem.svelte';
	import type { SideNavLinkProps } from './types';

	let { class: classname, ...props } = $props<SideNavLinkProps>();
</script>

<SideNavItem>
	<a class={classNames('side-nav__link', classname)} {...props}><slot /></a>
</SideNavItem>

<style>
	.side-nav__link {
		display: block;
		color: inherit;
		font: inherit;
		font-weight: var(--side-nav-link-font-weight, 400);
		text-decoration: none;
	}

	.side-nav__link:hover {
		background-color: var(--side-nav-item-hover-background-color, var(--_color-light));
	}

	:global(.side-nav__menu) .side-nav__link {
		padding: 0.25rem 0.5rem 0.25rem 1.5rem;
	}
</style>
