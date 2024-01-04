import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Icon } from '$lib/icons';
import type { Variant } from '$lib/internal/types';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet<void>;
	icon?: Icon;
	variant?: Variant;
	dismissible?: boolean;
	onDismiss?: () => void;
}
