import type { SvelteComponent, ComponentType } from 'svelte';
import type { IconProps } from './types';

export { default as ChevronIcon } from './ChevronIcon.svelte';
export { default as CloseIcon } from './CloseIcon.svelte';
export { default as InfoIcon } from './InfoIcon.svelte';
export { default as SuccessIcon } from './SuccessIcon.svelte';
export { default as WarningIcon } from './WarningIcon.svelte';

export type Icon = ComponentType<SvelteComponent<IconProps>>;
