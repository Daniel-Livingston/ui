<script lang="ts">
	import { page } from '$app/stores';
	import { seo } from '$lib/stores';

	import type { SEOProps } from './types';

	let {} = $props<SEOProps>();

	let seoSite = $derived($seo.site ? ` | ${$seo.site}` : '');

	let { title, description } = $derived($page.data);
</script>

<svelte:head>
	<title>{title}{seoSite}</title>
	<meta name="description" content={description} />
</svelte:head>
