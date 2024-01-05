<script lang="ts">
	import './Button.css';
	import type { ButtonProps } from './types';
	import classNames from 'classnames';
	import { CloseIcon } from '$lib/icons';

	let {
		'aria-label': ariaLabel,
		close = false,
		rounded = false,
		size,
		type = 'button',
		variant,
		class: classname,
		...props
	} = $props<ButtonProps>();
</script>

<button
	class={classNames(
		'button',
		{ [`button-${variant}`]: !!variant },
		{ [`button-${size}`]: !!size },
		classname
	)}
	class:close
	class:rounded
	{type}
	aria-label={ariaLabel ? ariaLabel : close ? 'Close' : undefined}
	{...props}
>
	{#if close}
		<CloseIcon />
	{:else}
		<slot />
	{/if}
</button>
