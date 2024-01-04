<script lang="ts">
	import './Icon.css';
	import type { IconProps } from './types';
	import classNames from 'classnames';

	let { size = 24, color = 'currentColor', class: classname, ...props } = $props<IconProps>();
</script>

<svg
	class={classNames('icon', 'icon-warning', classname)}
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	{...props}
	><path
		fill={color}
		d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m-1-3h2v-5h-2zm1-2.5"
	/></svg
>
