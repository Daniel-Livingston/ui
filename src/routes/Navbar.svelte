<script lang="ts">
	import { Navbar, Search } from '$lib';
</script>

<Navbar>
	<div class="center">
		<Search id="search" />
	</div>
</Navbar>

<style>
	.center {
		grid-column: 5 / span 4;
	}
</style>
