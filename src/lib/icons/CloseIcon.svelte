<script lang="ts">
	import classNames from 'classnames';

	import Icon from './Icon.svelte';
	import type { CloseIconProps } from './types';

	let { color = 'currentColor', class: classname, ...props } = $props<CloseIconProps>();
</script>

<Icon class={classNames('icon', 'icon-close', classname)} {...props}>
	<path
		fill={color}
		d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
	/>
</Icon>
