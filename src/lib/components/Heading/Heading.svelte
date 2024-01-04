<script lang="ts">
	import './Heading.css';
	import type { HeadingProps } from './types';
	import classNames from 'classnames';

	let { level = 1, class: classname, ...props } = $props<HeadingProps>();
</script>

<svelte:element this={`h${level}`} class={classNames('heading', classname)} {...props}
	><slot /></svelte:element
>
