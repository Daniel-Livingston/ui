<script lang="ts">
	import classNames from 'classnames';

	import type { SideNavProps } from './types';

	let { class: classname, ...props } = $props<SideNavProps>();
</script>

<nav class="side-nav">
	<ul class={classNames('side-nav__items', classname)} {...props}>
		<slot />
	</ul>
</nav>

<style>
	@media (max-width: 767px) {
		.side-nav {
			display: none;
		}
	}

	@media (min-width: 768px) {
		.side-nav {
			display: block;
		}
	}

	.side-nav {
		border-top: var(--side-nav-border-width, 1px) solid
			var(--side-nav-border-color, rgba(var(--_color-dark-rgb), 0.2));
		border-right: var(--side-nav-border-width, 1px) solid
			var(--side-nav-border-color, rgba(var(--_color-dark-rgb), 0.2));
		overflow-y: auto;
	}

	.side-nav__items {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>
