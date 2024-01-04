<script lang="ts">
	import './Icon.css';
	import type { ChevronIconProps } from './types';
	import classNames from 'classnames';

	let {
		size = 24,
		color = 'currentColor',
		direction = 'left',
		class: classname,
		...props
	} = $props<ChevronIconProps>();
</script>

<svg
	class={classNames('icon', 'icon-chevron', direction, classname)}
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	{...props}><path fill={color} d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" /></svg
>
