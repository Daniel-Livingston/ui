<script lang="ts">
	import classNames from 'classnames';

	import type { CardProps } from './types';

	let {
		children,
		footer,
		header,
		image,
		subtitle,
		title,
		titleLevel = 3,
		rounded,
		class: classname,
		...props
	} = $props<CardProps>();
</script>

<div class={classNames('card', classname)} class:rounded {...props}>
	{#if header}
		<div class="card__header">
			{@render header()}
		</div>
	{/if}

	{#if image}
		<div class="card__image">
			{@render image()}
		</div>
	{/if}

	<div class="card__body">
		{#if title}
			<svelte:element this={`h${titleLevel}`} class="card__title">{title}</svelte:element>
		{/if}

		{#if subtitle}
			<p class="card__subtitle">{subtitle}</p>
		{/if}

		{#if children}
			<div class="card__content">
				{@render children()}
			</div>
		{/if}
	</div>

	{#if footer}
		<div class="card__footer">
			{@render footer()}
		</div>
	{/if}
</div>

<style>
	:global(:root) {
		--card_bg: var(--color-white);
		--card_border-color: var(--border-color);
		--card_border-radius: 0;
		--card_border-width: 1px;

		--card__header_bg: var(--color-light);
		--card__header_border-color: var(--border-color);
		--card__header_border-width: 1px;
		--card__header_padding-x: 1rem;
		--card__header_padding-y: 0.5rem;

		--card__body_padding-x: 1rem;
		--card__body_padding-y: 1rem;

		--card__title_color: var(--color-black);
		--card__title_font-family: var(--heading_font-family);
		--card__title_font-size: var(--heading_font-size);
		--card__title_font-weight: var(--heading_font-weight);

		--card__subtitle_color: var(--color-dark);
		--card__subtitle_font-family: var(--body-font-family);
		--card__subtitle_font-size: var(--body-font-size);
		--card__subtitle_font-weight: var(--body-font-weight);

		--card_rounded_border-radius: 0.25rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--card_bg: var(--color-white);
			--card_border-color: var(--border-color);

			--card__header_bg: var(--color-light);
			--card__header_border-color: var(--border-color);

			--card__title_color: var(--color-black);

			--card__subtitle_color: var(--color-dark);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--card_bg: var(--color-black);
			--card_border-color: var(--border-color);

			--card__header_bg: var(--color-gray-900);
			--card__header_border-color: var(--border-color);

			--card__title_color: var(--color-white);

			--card__subtitle_color: var(--color-gray-300);
		}
	}

	:where(.card) {
		background-color: var(--card_bg);
	}

	:where(.card__header) {
		background-color: var(--card__header_bg);
		border: var(--card__header_border-width) solid var(--card__header_border-color);
		border-bottom: none;
		padding: var(--card__header_padding-y) var(--card__header_padding-x);
	}

	:where(.card__image) > :global(:where(img)) {
		border-radius: inherit;
		display: block;
		height: auto;
		max-width: 100%;
	}

	:where(.card__body) {
		border: var(--card_border-width) solid var(--card_border-color);
		border-radius: var(--card_border-radius);
		padding: var(--card__body_padding-y) var(--card__body_padding-x);
	}

	:where(.card__image + .card__body) {
		border-top: none;
	}

	:where(.card__title) {
		color: var(--card__title_color);
		font-family: var(--card__title_font-family);
		font-size: var(--card__title_font-size);
		font-weight: var(--card__title_font-weight);
	}

	:where(.card__subtitle) {
		color: var(--card__subtitle_color);
		font-family: var(--card__subtitle_font-family);
		font-size: var(--card__subtitle_font-size);
		font-weight: var(--card__subtitle_font-weight);
	}

	:where(.card__title + .card__content),
	:where(.card__subtitle + .card__content) {
		margin-block-start: 0.5rem;
	}

	:where(.card__footer) {
		background-color: var(--card__header_bg);
		border: var(--card__header_border-width) solid var(--card__header_border-color);
		border-top: none;
		padding: var(--card__header_padding-y) var(--card__header_padding-x);
	}

	:where(.rounded :first-child) {
		border-top-left-radius: var(--card_rounded_border-radius);
		border-top-right-radius: var(--card_rounded_border-radius);
	}

	:where(.rounded :last-child) {
		border-bottom-left-radius: var(--card_rounded_border-radius);
		border-bottom-right-radius: var(--card_rounded_border-radius);
	}
</style>
