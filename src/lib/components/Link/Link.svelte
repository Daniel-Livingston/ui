<script lang="ts">
	import './Link.css';
	import type { LinkProps } from './types';
	import classNames from 'classnames';

	let { class: classname, ...props } = $props<LinkProps>();
</script>

<a class={classNames('link', classname)} {...props}><slot /></a>
