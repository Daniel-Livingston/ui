<script lang="ts">
	import classNames from 'classnames';

	import type { BadgeProps } from './types';

	let { size, variant, class: classname, ...props } = $props<BadgeProps>();
</script>

<span class={classNames('badge', size, variant, classname)} {...props}>
	<slot />
</span>

<style>
	:global(:root) {
		--badge_bg: transparent;
		--badge_color: var(--color-black);
		--badge_font-family: var(--body-font-family);
		--badge_font-size: var(--body-font-size);
		--badge_font-weight: var(--body-font-weight);
		--badge_padding-x: 0.5rem;
		--badge_padding-y: 0.25rem;
		--badge_border-radius: 1rem;

		--badge_primary_bg: rgba(var(--color-primary-rgb), 0.8);
		--badge_primary_color: var(--color-white);
		--badge_secondary_bg: rgba(var(--color-secondary-rgb), 0.8);
		--badge_secondary_color: var(--color-white);
		--badge_success_bg: rgba(var(--color-success-rgb), 0.8);
		--badge_success_color: var(--color-black);
		--badge_danger_bg: rgba(var(--color-danger-rgb), 0.8);
		--badge_danger_color: var(--color-white);
		--badge_warning_bg: rgba(var(--color-warning-rgb), 0.8);
		--badge_warning_color: var(--color-black);
		--badge_info_bg: rgba(var(--color-info-rgb), 0.8);
		--badge_info_color: var(--color-white);
		--badge_light_bg: rgba(var(--color-light-rgb), 0.8);
		--badge_light_color: var(--color-black);
		--badge_dark_bg: rgba(var(--color-dark-rgb), 0.8);
		--badge_dark_color: var(--color-white);

		--badge_xs_font-size: 0.75rem;
		--badge_xs_padding-x: 0.25rem;
		--badge_xs_padding-y: 0.1rem;
		--badge_sm_font-size: 0.875rem;
		--badge_sm_padding-x: 0.35rem;
		--badge_sm_padding-y: 0.125rem;
		--badge_md_font-size: 1rem;
		--badge_md_padding-x: 0.5rem;
		--badge_md_padding-y: 0.25rem;
		--badge_lg_font-size: 1.25rem;
		--badge_lg_padding-x: 0.75rem;
		--badge_lg_padding-y: 0.5rem;
		--badge_xl_font-size: 1.5rem;
		--badge_xl_padding-x: 1rem;
		--badge_xl_padding-y: 0.75rem;
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--badge_color: var(--color-black);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--badge_color: var(--color-white);
		}
	}

	.badge {
		--_bg: var(--badge_bg);
		--_color: var(--badge_color);
		--_font-size: var(--badge_font-size);
		--_padding-x: var(--badge_padding-x);
		--_padding-y: var(--badge_padding-y);

		background-color: var(--_bg);
		border-radius: var(--badge-border-radius);
		color: var(--_color);
		font-family: var(--badge_font-family);
		font-size: var(--_font-size);
		font-weight: var(--badge_font-weight);
		padding: var(--_padding-y) var(--_padding-x);
	}

	.primary {
		--_bg: var(--badge_primary_bg);
		--_color: var(--badge_primary_color);
	}

	.secondary {
		--_bg: var(--badge_secondary_bg);
		--_color: var(--badge_secondary_color);
	}

	.success {
		--_bg: var(--badge_success_bg);
		--_color: var(--badge_success_color);
	}

	.danger {
		--_bg: var(--badge_danger_bg);
		--_color: var(--badge_danger_color);
	}

	.warning {
		--_bg: var(--badge_warning_bg);
		--_color: var(--badge_warning_color);
	}

	.info {
		--_bg: var(--badge_info_bg);
		--_color: var(--badge_info_color);
	}

	.light {
		--_bg: var(--badge_light_bg);
		--_color: var(--badge_light_color);
	}

	.dark {
		--_bg: var(--badge_dark_bg);
		--_color: var(--badge_dark_color);
	}

	.xs {
		--_font-size: var(--badge_xs_font-size);
		--_padding-x: var(--badge_xs_padding-x);
		--_padding-y: var(--badge_xs_padding-y);
	}

	.sm {
		--_font-size: var(--badge_sm_font-size);
		--_padding-x: var(--badge_sm_padding-x);
		--_padding-y: var(--badge_sm_padding-y);
	}

	.md {
		--_font-size: var(--badge_md_font-size);
		--_padding-x: var(--badge_md_padding-x);
		--_padding-y: var(--badge_md_padding-y);
	}

	.lg {
		--_font-size: var(--badge_lg_font-size);
		--_padding-x: var(--badge_lg_padding-x);
		--_padding-y: var(--badge_lg_padding-y);
	}

	.xl {
		--_font-size: var(--badge_xl_font-size);
		--_padding-x: var(--badge_xl_padding-x);
		--_padding-y: var(--badge_xl_padding-y);
	}
</style>
