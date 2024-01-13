export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark';

export type TOCItem = string | { label: string; id?: string; href?: string; items?: TOCItem[] };
