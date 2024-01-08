<script lang="ts">
	import type { IconProps } from './types';

	let { size = 24, ...props } = $props<IconProps>();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
	<slot />
</svg>
