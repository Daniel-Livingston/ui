<script lang="ts">
	import '$lib/styles/reset.css';
	import '$lib/styles/variables.css';
	import '$lib/styles/base.css';

	import { SideNav } from '$lib';
</script>

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
	<main class="main readable">
		<slot />
	</main>
</div>

<style>
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
</style>
