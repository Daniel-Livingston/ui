import type { HTMLTableAttributes } from 'svelte/elements';

export interface DataTableProps extends HTMLTableAttributes {
	columns: { header: string | number; key: string | number }[];
	rows: { [key: string | number]: string | number }[];
}
