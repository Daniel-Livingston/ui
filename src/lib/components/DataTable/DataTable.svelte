<script lang="ts">
	import classNames from 'classnames';

	import type { DataTableProps } from './types';

	let { columns, rows, class: classname, ...props } = $props<DataTableProps>();
</script>

<table class={classNames('table', classname)} {...props}>
	<slot />
</table>
