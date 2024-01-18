<script lang="ts">
	import classNames from 'classnames';

	import { ChevronIcon } from '$lib/icons';
	import { collapse } from '$lib/actions';
	import SideNavItem from './SideNavItem.svelte';
	import type { SideNavMenuProps } from './types';

	let { label, open = false, class: classname, ...props } = $props<SideNavMenuProps>();

	let controller = $state<HTMLButtonElement | undefined>(undefined);
</script>

<SideNavItem>
	<button class="side-nav__menu-button" bind:this={controller} on:click={() => (open = !open)}>
		<span>{label}</span>
		<ChevronIcon direction={open ? 'up' : 'down'} />
	</button>

	<ul
		class={classNames('side-nav__menu', classname)}
		use:collapse={{ collapsed: !open, controller }}
		{...props}
	>
		<slot />
	</ul>
</SideNavItem>

<style>
	.side-nav__menu-button {
		align-items: center;
		background-color: var(--side-nav-item-bg);
		color: inherit;
		border: none;
		cursor: pointer;
		display: flex;
		font-weight: var(--side-nav-item-font-weight);
		justify-content: space-between;
		width: 100%;
	}

	.side-nav__menu-button {
		padding: 0.25rem 0.5rem;
	}

	.side-nav__menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.side-nav__menu-button:hover {
		background-color: var(--side-nav-item-bg-hover);
	}
</style>
