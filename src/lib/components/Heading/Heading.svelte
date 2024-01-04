<script lang="ts">
	import './Heading.css';
	import type { HeadingProps } from './types';

	let { level = 1, class: classname, ...props } = $props<HeadingProps>();
</script>

<svelte:element this={`h${level}`} class="heading {classname}" {...props}><slot /></svelte:element>
