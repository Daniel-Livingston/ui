<script lang="ts">
	import './Button.css';
	import type { ButtonProps } from './types';

	let {
		'aria-label': ariaLabel,
		close = false,
		type = 'button',
		variant = 'primary',
		class: classname,
		...props
	} = $props<ButtonProps>();
</script>

<button
	class="button button-{variant} {classname}"
	class:close
	{type}
	aria-label={ariaLabel ? ariaLabel : close ? 'Close' : undefined}
	{...props}
>
	{#if close}
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
			/>
		</svg>
	{:else}
		<slot />
	{/if}
</button>
