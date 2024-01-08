<script lang="ts">
	import { page } from '$app/stores';

	import '$lib/styles.css';
	import 'highlight.js/styles/default.css';

	import { Heading, SideNav, Text } from '$lib';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<div class="grid">
	<SideNav class="sidebar">
		<SideNav.Menu id="actions" label="Actions">
			<SideNav.Link href="/actions/collapse">Collapse</SideNav.Link>
		</SideNav.Menu>
		<SideNav.Menu id="components" label="Components">
			<SideNav.Link href="/components/accordion">Accordion</SideNav.Link>
			<SideNav.Link href="/components/alert">Alert</SideNav.Link>
			<SideNav.Link href="/components/button">Button</SideNav.Link>
			<SideNav.Link href="/components/code">Code</SideNav.Link>
		</SideNav.Menu>
	</SideNav>
	<main class="main">
		<div class="header">
			<Heading level={1}>{$page.data.title}</Heading>
		</div>

		<div class="content readable">
			<div class="description">
				<Text class="readable" size="xl">{$page.data.description}</Text>
			</div>

			<slot />
		</div>
	</main>
</div>

<style>
	.header,
	.content {
		background-color: var(--_color-light);
		padding-inline: 1rem;
	}

	.header {
		border-bottom: 1px solid rgba(var(--_color-dark-rgb), 0.2);
	}

	.content {
		padding-bottom: 3rem;
	}

	.description {
		padding-top: 3rem;
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
			overflow-y: auto;
		}
	}

	@media (min-width: 992px) {
		.header,
		.content {
			padding-inline: 5rem;
		}
	}
</style>
