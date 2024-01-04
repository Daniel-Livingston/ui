<script lang="ts">
	import './Text.css';
	import type { TextProps } from './types';
	import classNames from 'classnames';

	let { size = 'md', class: classname, ...props } = $props<TextProps>();
</script>

<p class={classNames('text', `text-${size}`, classname)} {...props}>
	<slot />
</p>
