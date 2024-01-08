<script lang="ts">
	import classNames from 'classnames';

	import type { TextProps } from './types';

	let { size = 'md', class: classname, ...props } = $props<TextProps>();
</script>

<p class={classNames('text', `text-${size}`, classname)} {...props}>
	<slot />
</p>

<style>
	.text {
		width: 100%;
	}

	:global(*) + .text {
		--_padding-block-start: var(--padding-block-start-text, 1.5rem);
		padding-block-start: var(--_padding-block-start);
	}

	.text-xs {
		font-size: var(--_font-size-xs);
	}

	.text-sm {
		font-size: var(--_font-size-sm);
	}

	.text-md {
		font-size: var(--_font-size-base);
	}

	.text-lg {
		font-size: var(--_font-size-lg);
	}

	.text-xl {
		--_padding-block-start: var(--padding-block-start-text, 3rem);

		font-size: var(--_font-size-xl);
	}
</style>
