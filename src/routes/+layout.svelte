<script lang="ts">
	import { page } from '$app/stores';

	import '$lib/styles.css';
	import 'highlight.js/styles/default.css';

	import { Heading, SideNav, Text } from '$lib';
	import navItems from './navItems';

	let { title, description } = $derived($page.data);
	let { pathname } = $derived($page.url);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="grid">
	<SideNav>
		{#each navItems as navItemGroup, i}
			{#each navItemGroup as { id, label, items }}
				<SideNav.Menu {id} {label} open={pathname.includes(id)}>
					{#each items as { id, label, href }}
						<SideNav.Link {id} {href} active={href === pathname}>{label}</SideNav.Link>
					{/each}
				</SideNav.Menu>
			{/each}
			{#if i < navItems.length - 1}
				<SideNav.Separator />
			{/if}
		{/each}
	</SideNav>

	<main class="main">
		<div class="header">
			<Heading level={1}>{title}</Heading>
		</div>

		<div class="content readable">
			<div class="description">
				<Text class="readable" size="xl">{description}</Text>
			</div>

			<slot />
		</div>
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

	.description {
		padding-top: 3rem;
	}

	.content > :global(pre) {
		padding-block-start: 1.5rem;
	}

	.content > :global(.demo) + :global(.code) {
		padding-block-start: 0;
	}

	.content > :global(*) + :global(.text) {
		--text-spacing-top: 1.5rem;
	}

	.content > :global(*) + :global(.text-xl) {
		--text-spacing-top: 3rem;
	}

	.content > :global(*) + :global(.heading) {
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
