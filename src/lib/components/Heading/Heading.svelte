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
		--heading-font-family: var(--sans-serif);
		--heading-font-size: var(--font-size-lg);
		--heading-font-weight: 700;
		--heading-line-height: var(--body-line-height);
		--heading-spacing-top: 0;
		--heading-spacing-bottom: 0;

		--h1-color: var(--heading-color);
		--h1-font-family: var(--heading-font-family);
		--h1-font-size: 2.5rem;
		--h1-font-weight: var(--heading-font-weight);
		--h1-line-height: var(--heading-line-height);
		--h1-spacing-top: var(--heading-spacing-top);
		--h1-spacing-bottom: var(--heading-spacing-bottom);

		--h2-color: var(--heading-color);
		--h2-font-family: var(--heading-font-family);
		--h2-font-size: 2rem;
		--h2-font-weight: var(--heading-font-weight);
		--h2-line-height: var(--heading-line-height);
		--h2-spacing-top: var(--heading-spacing-top);
		--h2-spacing-bottom: var(--heading-spacing-bottom);

		--h3-color: var(--heading-color);
		--h3-font-family: var(--heading-font-family);
		--h3-font-size: 1.75rem;
		--h3-font-weight: var(--heading-font-weight);
		--h3-line-height: var(--heading-line-height);
		--h3-spacing-top: var(--heading-spacing-top);
		--h3-spacing-bottom: var(--heading-spacing-bottom);

		--h4-color: var(--heading-color);
		--h4-font-family: var(--heading-font-family);
		--h4-font-size: 1.5rem;
		--h4-font-weight: var(--heading-font-weight);
		--h4-line-height: var(--heading-line-height);
		--h4-spacing-top: var(--heading-spacing-top);
		--h4-spacing-bottom: var(--heading-spacing-bottom);

		--h5-color: var(--heading-color);
		--h5-font-family: var(--heading-font-family);
		--h5-font-size: 1.25rem;
		--h5-font-weight: var(--heading-font-weight);
		--h5-line-height: var(--heading-line-height);
		--h5-spacing-top: var(--heading-spacing-top);
		--h5-spacing-bottom: var(--heading-spacing-bottom);

		--h6-color: var(--heading-color);
		--h6-font-family: var(--heading-font-family);
		--h6-font-size: 1rem;
		--h6-font-weight: var(--heading-font-weight);
		--h6-line-height: var(--heading-line-height);
		--h6-spacing-top: var(--heading-spacing-top);
		--h6-spacing-bottom: var(--heading-spacing-bottom);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--heading-color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--heading-color: var(--color-light);
		}
	}

	.heading {
		color: var(--heading-color);
		font-family: var(--heading-font-family);
		font-size: var(--heading-font-size);
		font-weight: var(--heading-font-weight);
		line-height: var(--heading-line-height);
		padding: var(--heading-spacing-top) 0 var(--heading-spacing-bottom);
	}

	.h1 {
		color: var(--h1-color);
		font-family: var(--h1-font-family);
		font-size: var(--h1-font-size);
		font-weight: var(--h1-font-weight);
		line-height: var(--h1-line-height);
		padding: var(--h1-spacing-top) 0 var(--h1-spacing-bottom);
	}

	.h2 {
		color: var(--h2-color);
		font-family: var(--h2-font-family);
		font-size: var(--h2-font-size);
		font-weight: var(--h2-font-weight);
		line-height: var(--h2-line-height);
		padding: var(--h2-spacing-top) 0 var(--h2-spacing-bottom);
	}

	.h3 {
		color: var(--h3-color);
		font-family: var(--h3-font-family);
		font-size: var(--h3-font-size);
		font-weight: var(--h3-font-weight);
		line-height: var(--h3-line-height);
		padding: var(--h3-spacing-top) 0 var(--h3-spacing-bottom);
	}

	.h4 {
		color: var(--h4-color);
		font-family: var(--h4-font-family);
		font-size: var(--h4-font-size);
		font-weight: var(--h4-font-weight);
		line-height: var(--h4-line-height);
		padding: var(--h4-spacing-top) 0 var(--h4-spacing-bottom);
	}

	.h5 {
		color: var(--h5-color);
		font-family: var(--h5-font-family);
		font-size: var(--h5-font-size);
		font-weight: var(--h5-font-weight);
		line-height: var(--h5-line-height);
		padding: var(--h5-spacing-top) 0 var(--h5-spacing-bottom);
	}

	.h6 {
		color: var(--h6-color);
		font-family: var(--h6-font-family);
		font-size: var(--h6-font-size);
		font-weight: var(--h6-font-weight);
		line-height: var(--h6-line-height);
		padding: var(--h6-spacing-top) 0 var(--h6-spacing-bottom);
	}
</style>
