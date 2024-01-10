<li class="toc__item">
	<slot />
</li>

<style>
	:global(*) + .toc__item {
		padding-top: var(--toc-item-spacing);
	}
</style>
