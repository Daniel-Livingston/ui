import type { HTMLInputAttributes } from 'svelte/elements';

export interface SearchProps extends Omit<HTMLInputAttributes, 'type'> {
	id: HTMLInputAttributes['id'];
}
