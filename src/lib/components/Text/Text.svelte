<script lang="ts">
	import './Text.css';
	import type { TextProps } from './types';

	let { size = 'medium', class: classname, ...props } = $props<TextProps>();
</script>

<p class="text text-{size} {classname}" {...props}>
	<slot />
</p>
