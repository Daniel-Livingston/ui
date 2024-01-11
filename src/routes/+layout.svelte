<script lang="ts">
	import { page } from '$app/stores';

	import '$lib/styles.css';
	import 'highlight.js/styles/default.css';

	import { Heading, TableOfContents, Text } from '$lib';

	import SideNav from './SideNav.svelte';

	let { title, description } = $derived($page.data);

	let content: HTMLElement;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="grid">
	<SideNav />

	<main class="main">
		<div class="header">
			<Heading id="title" level={1}>{title}</Heading>
		</div>

		<article class="content">
			<div class="readable" bind:this={content}>
				<div class="description">
					<Text class="readable" size="xl">{description}</Text>
				</div>

				<slot />
			</div>

			<aside>
				<slot name="toc">
					<TableOfContents {content} auto />
				</slot>
			</aside>
		</article>
	</main>
</div>

<style>
	:global(body),
	.main {
		min-height: 100vh;
		height: 100%;
	}

	.main {
		display: flex;
		flex-direction: column;
	}

	.header,
	.content {
		background-color: var(--_color-light);
		padding-inline: 1rem;
	}

	.header {
		border-bottom: 1px solid rgba(var(--color-dark-rgb), 0.2);
	}

	.header :global(.h1) {
		--h1-spacing-top: 3rem;
		--h1-spacing-bottom: 3rem;
	}

	.content {
		flex: 1;
		padding-bottom: 3rem;
	}

	.description,
	aside {
		padding-top: 3rem;
	}

	.readable > :global(pre) {
		padding-block-start: 1.5rem;
	}

	.readable > :global(.demo) + :global(.code) {
		padding-block-start: 0;
	}

	.readable > :global(*) + :global(.text) {
		--text-spacing-top: 1.5rem;
	}

	.readable > :global(*) + :global(.text-xl) {
		--text-spacing-top: 3rem;
	}

	.readable > :global(*) + :global(.heading) {
		--h2-spacing-top: 2rem;
		--h3-spacing-top: 2rem;
		--h4-spacing-top: 2rem;
		--h5-spacing-top: 2rem;
		--h6-spacing-top: 2rem;
	}

	@media (min-width: 768px) {
		.grid {
			display: grid;
			grid-template-columns: 250px 1fr;
			grid-template-rows: 1fr;
			grid-template-areas: 'sidebar main';
		}

		.sidebar {
			grid-area: sidebar;
		}

		.main {
			grid-area: main;
		}
	}

	@media (max-width: 991px) {
		aside {
			display: none;
		}
	}

	@media (min-width: 992px) {
		.header,
		.content {
			padding-inline-start: 5rem;
		}

		.content {
			display: flex;
			gap: 3rem;
		}

		.readable {
			flex: 1 1 100%;
			max-width: 45rem;
		}

		aside {
			flex: 1;
			max-width: 15rem;
			position: relative;
		}
	}
</style>
