<script lang="ts">
	import { SideNav } from '$lib';
</script>

<div class="grid">
	<SideNav class="sidebar">
		<SideNav.Menu label="My Component Library">
			<SideNav.Link href="#">What is it?</SideNav.Link>
		</SideNav.Menu>
	</SideNav>
	<main class="main">
		<slot />
	</main>
</div>

<style>
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
		padding: 1rem;
	}
</style>
