<script lang="ts">
	import classNames from 'classnames';

	import Icon from './Icon.svelte';
	import type { ChevronIconProps } from './types';

	let {
		color = 'currentColor',
		direction = 'left',
		class: classname,
		...props
	} = $props<ChevronIconProps>();
</script>

<Icon class={classNames('icon', 'icon-chevron', direction)} {...props}>
	<path fill={color} d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" />
</Icon>

<style>
	:global(.icon-chevron) {
		transform: rotate(0deg);
		transition: transform 0.1s ease-in-out;
	}

	:global(.icon-chevron.right) {
		transform: rotate(180deg);
	}

	:global(.icon-chevron.up) {
		transform: rotate(270deg);
	}

	:global(.icon-chevron.down) {
		transform: rotate(90deg);
	}
</style>
