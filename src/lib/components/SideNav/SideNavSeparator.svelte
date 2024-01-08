<script lang="ts">
	import classNames from 'classnames';

	import type { SideNavSeparatorProps } from './types';

	let { class: classname, ...props } = $props<SideNavSeparatorProps>();
</script>

<div>
	<hr class={classNames('side-nav__separator', classname)} {...props} />
</div>

<style>
	div {
		padding: 0.5rem;
	}

	.side-nav__separator {
		border: none;
		border-top: var(--side-nav-separator-width) solid var(--side-nav-separator-color);
		height: 0;
	}
</style>
