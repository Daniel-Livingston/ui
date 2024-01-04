<script lang="ts">
	import type { SideNavMenuProps } from './types';
	import classNames from 'classnames';
	import { ChevronIcon } from '$lib/icons';
	import { collapse } from '$lib/actions';

	let { id, label, open = false, class: classname, ...props } = $props<SideNavMenuProps>();

	let controller: HTMLButtonElement;
</script>

<li {id} class={classNames('side-nav__item', classname)} {...props}>
	<button class="side-nav__menu-button" bind:this={controller} on:click={() => (open = !open)}>
		<span>{label}</span>
		<ChevronIcon direction={open ? 'up' : 'down'} />
	</button>
	<ul id="{id}-menu" class="side-nav__menu" use:collapse={{ collapsed: !open, controller }}>
		<slot />
	</ul>
</li>
