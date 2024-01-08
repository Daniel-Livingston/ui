<div class="demo">
	<div class="demo-window">
		<slot />
	</div>
</div>

<style>
	:global(:root) {
		--demo-bg: var(--color-white);
		--demo-border-color: rgba(var(--color-dark-rgb), 0.2);
		--demo-border-width: 1px;
		--demo-padding: 1.5rem;
		--demo-spacing-top: 1.5rem;
	}

	.demo {
		padding-top: var(--demo-spacing-top);
	}

	.demo-window {
		background-color: var(--demo-bg);
		border: var(--demo-border-width) solid var(--demo-border-color);
		max-width: 45rem;
		padding: var(--demo-padding);
	}
</style>
