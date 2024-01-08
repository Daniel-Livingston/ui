<script lang="ts">
	import classNames from 'classnames';

	import type { TextProps } from './types';

	let { size = 'md', class: classname, ...props } = $props<TextProps>();
</script>

<p class={classNames('text', `text-${size}`, classname)} {...props}>
	<slot />
</p>

<style>
	:global(:root) {
		--text-color: var(--color-dark);
		--text-font-family: var(--sans-serif);
		--text-font-size: var(--font-size-base);
		--text-font-weight: var(--font-weight-normal);
		--text-line-height: var(--line-height-base);
		--text-spacing-top: 0;
		--text-spacing-bottom: 0;

		--text-font-size-xs: var(--font-size-xs);
		--text-font-size-sm: var(--font-size-sm);
		--text-font-size-md: var(--font-size-md);
		--text-font-size-lg: var(--font-size-lg);
		--text-font-size-xl: var(--font-size-xl);
	}

	.text {
		color: var(--text-color);
		font-family: var(--text-font-family);
		font-size: var(--text-font-size);
		font-weight: var(--text-font-weight);
		line-height: var(--text-line-height);
		padding: var(--text-spacing-top) 0 var(--text-spacing-bottom);
		width: 100%;
	}

	.text-xs {
		font-size: var(--font-size-xs);
	}

	.text-sm {
		font-size: var(--font-size-sm);
	}

	.text-md {
		font-size: var(--font-size-md);
	}

	.text-lg {
		font-size: var(--font-size-lg);
	}

	.text-xl {
		font-size: var(--font-size-xl);
	}
</style>
