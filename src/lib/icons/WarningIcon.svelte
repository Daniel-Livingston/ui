<script lang="ts">
	import classNames from 'classnames';

	import Icon from './Icon.svelte';
	import type { WarningIconProps } from './types';

	let { color = 'currentColor', class: classname, ...props } = $props<WarningIconProps>();
</script>

<Icon class={classNames('icon', 'icon-warning', classname)} {...props}>
	<path
		fill={color}
		d="M1 21L12 2l11 19zm3.45-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m-1-3h2v-5h-2zm1-2.5"
	/>
</Icon>
