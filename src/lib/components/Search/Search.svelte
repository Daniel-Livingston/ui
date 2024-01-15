<script lang="ts">
	import { SearchIcon } from '$lib/icons';

	import type { SearchProps } from './types';

	let { id, ...props } = $props<SearchProps>();
</script>

<div class="search">
	<div class="search__input-wrapper">
		<label for={id}>
			<span class="visually-hidden">Search</span>
			<SearchIcon />
		</label>
		<input {id} class="search__input" type="search" {...props} />
	</div>
</div>

<style>
	:global(:root) {
		--search-input-padding-x: 0.75rem;
		--search-input-padding-y: 0.5rem;

		--search-input-border-width: 1px;

		--search-input-focus-outline-color: var(--color-primary);
		--search-input-focus-outline-offset: 2px;
		--search-input-focus-outline-width: 2px;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--search-icon-color: rgba(var(--color-dark-rgb), 0.5);
			--search-input-bg: var(--color-light);
			--search-input-border-color: rgba(var(--color-dark-rgb), 0.2);
			--search-input-color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--search-icon-color: rgba(var(--color-light-rgb), 0.5);
			--search-input-bg: var(--color-black);
			--search-input-border-color: rgba(var(--color-light-rgb), 0.2);
			--search-input-color: var(--color-gray-100);
		}
	}

	.search {
		width: 100%;
	}

	.search__input-wrapper {
		position: relative;
	}

	.search__input-wrapper :global(.icon-search) {
		color: var(--search-icon-color);
		position: absolute;
		top: var(--search-input-padding-y);
		left: calc(var(--search-input-padding-x) / 2);
	}

	.search__input {
		background-color: var(--search-input-bg);
		border: var(--search-input-border-width) solid var(--search-input-border-color);
		color: var(--search-input-color);
		padding: var(--search-input-padding-y) var(--search-input-padding-x)
			var(--search-input-padding-y) calc(var(--search-input-padding-x) * 2 + 8px);
		width: 100%;
	}

	.search__input:focus {
		outline: var(--search-input-focus-outline-width) solid var(--search-input-focus-outline-color);
		outline-offset: var(--search-input-focus-outline-offset);
	}
</style>
