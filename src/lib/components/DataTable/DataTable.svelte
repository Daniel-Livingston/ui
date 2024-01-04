<script lang="ts">
	import './DataTable.css';
	import type { DataTableProps } from './types';
	import classNames from 'classnames';

	let { columns, rows, class: classname, ...props } = $props<DataTableProps>();
</script>

<table class={classNames('table', classname)} {...props}>
	<slot />
</table>
