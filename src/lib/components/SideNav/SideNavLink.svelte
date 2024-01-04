<script lang="ts">
	import type { SideNavLinkProps } from './types';
	import classNames from 'classnames';

	let { class: classname, ...props } = $props<SideNavLinkProps>();
</script>

<li class="side-nav__item">
	<a class={classNames('side-nav__link', classname)} {...props}><slot /></a>
</li>
