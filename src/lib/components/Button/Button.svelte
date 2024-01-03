<script lang="ts">
	import './Button.css';
	import type { Props } from './Button.props'

	let { children, variant = 'primary', ...props } = $props<Props>();
</script>

<button class="button button-{variant}" {...props}>
	{@render children()}
</button>