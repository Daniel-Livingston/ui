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
		--navbar-border-color: var(--border-color);
		--navbar-border-width: 1px;
		--navbar-padding-x: 1rem;
		--navbar-padding-y: 0.5rem;
	}

	.navbar {
		border-bottom: var(--navbar-border-width) solid var(--navbar-border-color);
		padding: var(--navbar-padding-y) var(--navbar-padding-x);
	}
</style>
