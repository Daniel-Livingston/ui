<script lang="ts">
	import classNames from 'classnames';

	import SideNavItem from './SideNavItem.svelte';
	import type { SideNavLinkProps } from './types';

	let { active = false, class: classname, ...props } = $props<SideNavLinkProps>();
</script>

<SideNavItem>
	<a class={classNames('side-nav__link', classname)} class:active {...props}><slot /></a>
</SideNavItem>

<style>
	.side-nav__link {
		background-color: var(--side-nav-link-bg);
		color: inherit;
		display: block;
		font: inherit;
		font-weight: var(--side-nav-link-font-weight);
		padding: var(--side-nav-link-spacing-y) var(--side-nav-link-spacing-x);
		text-decoration: none;
	}

	.side-nav__link:hover {
		background-color: var(--side-nav-link-bg-hover);
	}

	:global(.side-nav__menu) .side-nav__link {
		padding: var(--side-nav-link-spacing-y) var(--side-nav-link-spacing-x)
			var(--side-nav-link-spacing-y) var(--side-nav-link-spacing-start-nested);
	}

	.side-nav__link.active {
		background-color: var(--side-nav-link-active-bg);
		font-weight: var(--side-nav-link-active-font-weight);
	}
</style>
