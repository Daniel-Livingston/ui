<script lang="ts">
	import classNames from 'classnames';

	import type { HeadingProps } from './types';

	let { level = 1, class: classname, ...props } = $props<HeadingProps>();
</script>

<svelte:element this={`h${level}`} class={classNames('heading', classname)} {...props}
	><slot /></svelte:element
>

<style>
	.heading {
		font: var(--_font-weight) var(--_font-size) / var(--_line-height) var(--_font-family);
		color: var(--_color);
		padding-block-start: var(--_padding-block-start);
		padding-block-end: var(--_padding-block-end, 0);
	}

	h1.heading {
		--_font-family: var(--_font-family-h1);
		--_font-size: var(--_font-size-h1);
		--_font-weight: var(--_font-weight-h1);
		--_line-height: var(--_line-height-h1);
		--_color: var(--_color-h1);
		--_padding-block-start: var(--padding-block-start-h1, 5rem);
		--_padding-block-end: var(--padding-block-end-h1, 2rem);
	}

	h2.heading {
		--_font-family: var(--_font-family-h2);
		--_font-size: var(--_font-size-h2);
		--_font-weight: var(--_font-weight-h2);
		--_line-height: var(--_line-height-h2);
		--_color: var(--_color-h2);
		--_padding-block-start: var(--padding-block-start-h2, 2rem);
	}

	h3.heading {
		--_font-family: var(--_font-family-h3);
		--_font-size: var(--_font-size-h3);
		--_font-weight: var(--_font-weight-h3);
		--_line-height: var(--_line-height-h3);
		--_color: var(--_color-h3);
		--_padding-block-start: var(--padding-block-start-h3, 2rem);
	}

	h4.heading {
		--_font-family: var(--_font-family-h4);
		--_font-size: var(--_font-size-h4);
		--_font-weight: var(--_font-weight-h4);
		--_line-height: var(--_line-height-h4);
		--_color: var(--_color-h4);
		--_padding-block-start: var(--padding-block-start-h4, 2rem);
	}

	h5.heading {
		--_font-family: var(--_font-family-h5);
		--_font-size: var(--_font-size-h5);
		--_font-weight: var(--_font-weight-h5);
		--_line-height: var(--_line-height-h5);
		--_color: var(--_color-h5);
		--_padding-block-start: var(--padding-block-start-h5, 2rem);
	}

	h6.heading {
		--_font-family: var(--_font-family-h6);
		--_font-size: var(--_font-size-h6);
		--_font-weight: var(--_font-weight-h6);
		--_line-height: var(--_line-height-h6);
		--_color: var(--_color-h6);
		--_padding-block-start: var(--padding-block-start-h6, 2rem);
	}
</style>
