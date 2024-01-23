<script lang="ts">
	import classNames from 'classnames';

	import type { HeadingProps } from './types';

	let { level = 1, class: classname, ...props } = $props<HeadingProps>();

	let element = $derived(`h${level}`) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
</script>

<svelte:element this={element} class={classNames('heading', element, classname)} {...props}
	><slot /></svelte:element
>

<style>
	:global(:root) {
		--heading_color: var(--color-dark);
		--heading_font-family: var(--sans-serif);
		--heading_font-size: var(--font-size-lg);
		--heading_font-weight: 700;
		--heading_line-height: var(--body-line-height);
		--heading_spacing-top: 0;
		--heading_spacing-bottom: 0;

		--h1_color: var(--color-dark);
		--h1_font-family: var(--sans-serif);
		--h1_font-size: 2.5rem;
		--h1_font-weight: 700;
		--h1_line-height: var(--body-line-height);
		--h1_spacing-top: 0;
		--h1_spacing-bottom: 0;

		--h2_color: var(--color-dark);
		--h2_font-family: var(--sans-serif);
		--h2_font-size: 2rem;
		--h2_font-weight: 700;
		--h2_line-height: var(--body-line-height);
		--h2_spacing-top: 0;
		--h2_spacing-bottom: 0;

		--h3_color: var(--color-dark);
		--h3_font-family: var(--sans-serif);
		--h3_font-size: 1.75rem;
		--h3_font-weight: 700;
		--h3_line-height: var(--body-line-height);
		--h3_spacing-top: 0;
		--h3_spacing-bottom: 0;

		--h4_color: var(--color-dark);
		--h4_font-family: var(--sans-serif);
		--h4_font-size: 1.5rem;
		--h4_font-weight: 700;
		--h4_line-height: var(--body-line-height);
		--h4_spacing-top: 0;
		--h4_spacing-bottom: 0;

		--h5_color: var(--color-dark);
		--h5_font-family: var(--sans-serif);
		--h5_font-size: 1.25rem;
		--h5_font-weight: 700;
		--h5_line-height: var(--body-line-height);
		--h5_spacing-top: 0;
		--h5_spacing-bottom: 0;

		--h6_color: var(--color-dark);
		--h6_font-family: var(--sans-serif);
		--h6_font-size: 1rem;
		--h6_font-weight: 700;
		--h6_line-height: var(--body-line-height);
		--h6_spacing-top: 0;
		--h6_spacing-bottom: 0;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--heading_color: var(--color-dark);
			--h1_color: var(--color-dark);
			--h2_color: var(--color-dark);
			--h3_color: var(--color-dark);
			--h4_color: var(--color-dark);
			--h5_color: var(--color-dark);
			--h6_color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--heading_color: var(--color-light);
			--h1_color: var(--color-light);
			--h2_color: var(--color-light);
			--h3_color: var(--color-light);
			--h4_color: var(--color-light);
			--h5_color: var(--color-light);
			--h6_color: var(--color-light);
		}
	}

	.heading {
		--_color: var(--heading_color);
		--_font-family: var(--heading_font-family);
		--_font-size: var(--heading_font-size);
		--_font-weight: var(--heading_font-weight);
		--_line-height: var(--heading_line-height);
		--_spacing-top: var(--heading_spacing-top);
		--_spacing-bottom: var(--heading_spacing-bottom);

		color: var(--_color);
		font-family: var(--_font-family);
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
		padding: var(--_spacing-top) 0 var(--_spacing-bottom);
	}

	.h1 {
		--_color: var(--h1_color);
		--_font-family: var(--h1_font-family);
		--_font-size: var(--h1_font-size);
		--_font-weight: var(--h1_font-weight);
		--_line-height: var(--h1_line-height);
		--_spacing-top: var(--h1_spacing-top);
		--_spacing-bottom: var(--h1_spacing-bottom);
	}

	.h2 {
		--_color: var(--h2_color);
		--_font-family: var(--h2_font-family);
		--_font-size: var(--h2_font-size);
		--_font-weight: var(--h2_font-weight);
		--_line-height: var(--h2_line-height);
		--_spacing-top: var(--h2_spacing-top);
		--_spacing-bottom: var(--h2_spacing-bottom);
	}

	.h3 {
		--_color: var(--h3_color);
		--_font-family: var(--h3_font-family);
		--_font-size: var(--h3_font-size);
		--_font-weight: var(--h3_font-weight);
		--_line-height: var(--h3_line-height);
		--_spacing-top: var(--h3_spacing-top);
		--_spacing-bottom: var(--h3_spacing-bottom);
	}

	.h4 {
		--_color: var(--h4_color);
		--_font-family: var(--h4_font-family);
		--_font-size: var(--h4_font-size);
		--_font-weight: var(--h4_font-weight);
		--_line-height: var(--h4_line-height);
		--_spacing-top: var(--h4_spacing-top);
		--_spacing-bottom: var(--h4_spacing-bottom);
	}

	.h5 {
		--_color: var(--h5_color);
		--_font-family: var(--h5_font-family);
		--_font-size: var(--h5_font-size);
		--_font-weight: var(--h5_font-weight);
		--_line-height: var(--h5_line-height);
		--_spacing-top: var(--h5_spacing-top);
		--_spacing-bottom: var(--h5_spacing-bottom);
	}

	.h6 {
		--_color: var(--h6_color);
		--_font-family: var(--h6_font-family);
		--_font-size: var(--h6_font-size);
		--_font-weight: var(--h6_font-weight);
		--_line-height: var(--h6_line-height);
		--_spacing-top: var(--h6_spacing-top);
		--_spacing-bottom: var(--h6_spacing-bottom);
	}
</style>
