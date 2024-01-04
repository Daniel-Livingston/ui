<script lang="ts">
	import './SideNav.css';
	import type { SideNavProps } from './types';
	import classNames from 'classnames';

	let { class: classname, ...props } = $props<SideNavProps>();
</script>

<nav class="side-nav">
	<ul class={classNames('side-nav__items', classname)} {...props}>
		<slot />
	</ul>
</nav>
