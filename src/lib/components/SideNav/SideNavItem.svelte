<li class="side-nav__item">
	<slot />
</li>

<style>
	.side-nav__item {
		background-color: var(--side-nav-item-background-color, var(--_color-white));
		color: var(--side-nav-item-text-color, var(--_color-dark));
		font-size: var(--side-nav-item-font-size, var(--_font-size-base));
	}
</style>
