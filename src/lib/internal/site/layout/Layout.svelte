<script lang="ts">
	import { Heading, Text } from '$lib/components';
	import type { Snippet } from 'svelte';

	type LayoutProps = {
		children: Snippet;
		title: string;
		description: string;
	};

	let { title, description } = $props<LayoutProps>();
</script>

<slot name="navbar" />
<div class="layout">
	<slot name="side-nav" />

	<main class="main">
		<header class="header">
			<Heading id="article-title" level={1}>{title}</Heading>
		</header>

		<article class="content">
			<div class="readable">
				<div class="description">
					<Text class="readable" size="xl">{description}</Text>
				</div>

				<slot />
			</div>

			<aside class="aside">
				<slot name="toc" />
			</aside>
		</article>
	</main>
</div>

<style>
	:global(html) {
		height: 100%;
	}

	:global(body) {
		min-height: 100dvh;
		height: 100%;
	}

	:global(body > div) {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.layout {
		flex: 1;
	}

	.main {
		display: flex;
		flex-direction: column;
	}

	.header,
	.content {
		padding-inline: 1rem;
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
	.aside {
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

	@media (prefers-color-scheme: light) {
		.header,
		.content {
			background-color: var(--color-light);
		}

		.header {
			border-bottom: 1px solid rgba(var(--color-dark-rgb), 0.2);
		}
	}

	@media (prefers-color-scheme: dark) {
		.header,
		.content {
			background-color: var(--color-gray-900);
		}

		.header {
			border-bottom: 1px solid rgba(var(--color-light-rgb), 0.2);
		}
	}

	@media (min-width: 768px) {
		.layout {
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
		.aside {
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

		.aside {
			flex: 1;
			max-width: 15rem;
			position: relative;
		}
	}
</style>
