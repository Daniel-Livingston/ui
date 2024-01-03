<script lang="ts">
	import './Button.css';
	import type { ButtonProps } from './types';

	let { children, class: classname, variant = 'primary', ...props } = $props<ButtonProps>();
</script>

<button class="button button-{variant} {classname}" {...props}>
	{@render children()}
</button>
