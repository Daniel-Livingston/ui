<div class="demo">
	<div class="demo-window">
		<slot />
	</div>
</div>

<style>
	.demo {
		padding-top: var(--spacing-block-start-demo, 1.5rem);
	}

	.demo-window {
		background-color: var(--background-color-demo, var(--_color-white));
		border: var(--border-width-demo, 1px) solid
			var(--border-color-demo, rgba(var(--_color-dark-rgb), 0.2));
		max-width: 45rem;
		padding: var(--padding-demo, 1.5rem);
	}
</style>
