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
	:global(:root) {
		--side-nav-border-color: var(--border-color);
		--side-nav-border-width: 1px;

		--side-nav-item-active-bg: var(--alt-bg);
		--side-nav-item-bg: var(--body-bg);
		--side-nav-item-bg-hover: var(--alt-bg);
		--side-nav-item-border-color: var(--border-color);
		--side-nav-item-font-size: var(--font-size-md);
		--side-nav-item-font-weight: 400;

		--side-nav-link-bg: transparent;
		--side-nav-link-spacing-x: 0.5rem;
		--side-nav-link-spacing-y: 0.25rem;
		--side-nav-link-spacing-start-nested: 1.5rem;
		--side-nav-link-active-font-weight: 700;

		--side-nav-menu-button-bg: transparent;

		--side-nav-separator-color: var(--border-color);
		--side-nav-separator-width: 1px;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--side-nav-item-color: var(--color-dark);
			--side-nav-link-active-color: var(--color-primary-700);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--side-nav-item-color: var(--color-gray-100);
			--side-nav-link-active-color: var(--color-primary-300);
		}
	}

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
		border-right: var(--side-nav-border-width) solid var(--side-nav-border-color);
	}

	.side-nav__items {
		list-style: none;
		margin: 0;
		padding: 0;
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
</style>
