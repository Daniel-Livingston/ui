<script lang="ts">
	import { page } from '$app/stores';
	import { SEO, seo } from '$lib';

	// Styles.
	import '$lib/styles.css';
	import light from '$lib/internal/styles/github.css?url';
	import dark from '$lib/internal/styles/github-dark.css?url';

	// Page Layout components.
	import Layout from './Layout.svelte';
	import Navbar from './Navbar.svelte';
	import SideNav from './SideNav.svelte';
	import TableOfContents from './TableOfContents.svelte';

	let { title, description, toc } = $derived($page.data);

	$seo.site = 'UI Library';
</script>

<SEO />

<svelte:head>
	<link rel="stylesheet" href={light} media="(prefers-color-scheme: light)" />
	<link rel="stylesheet" href={dark} media="(prefers-color-scheme: dark)" />
</svelte:head>

<Layout {title} {description}>
	<Navbar slot="navbar" />
	<SideNav slot="side-nav" />
	<slot />
	<TableOfContents slot="toc" items={toc} label={title ? title : 'On this page'} />
</Layout>
