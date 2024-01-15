<script lang="ts">
	import classNames from 'classnames';

	import type { NavbarProps } from './types';

	let { class: classname, ...props } = $props<NavbarProps>();
</script>

<nav class={classNames('grid', 'grid-12', 'navbar', classname)} {...props}>
	<slot />
</nav>

<style>
	:global(:root) {
		--navbar-border-width: 1px;
		--navbar-padding-x: 1rem;
		--navbar-padding-y: 0.5rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--navbar-border-color: rgba(var(--color-dark-rgb), 0.2);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--side-nav-item-border-color: rgba(var(--color-light-rgb), 0.2);
		}
	}

	.navbar {
		border-bottom: var(--navbar-border-width) solid var(--navbar-border-color);
		padding: var(--navbar-padding-y) var(--navbar-padding-x);
	}
</style>
