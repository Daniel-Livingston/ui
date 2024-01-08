<script lang="ts">
	import classNames from 'classnames';

	import type { LinkProps } from './types';

	let { class: classname, ...props } = $props<LinkProps>();
</script>

<a class={classNames('link', classname)} {...props}><slot /></a>

<style>
	.link {
		color: var(--_color-primary);
	}
</style>
