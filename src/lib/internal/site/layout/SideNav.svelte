<script lang="ts">
	import { page } from '$app/stores';
	import { SideNav } from '$lib/components';
	import type { SideNavProps } from './types';

	const items = [
		[
			{
				id: 'customization',
				label: 'Customization',
				items: [
					{
						id: 'css-variables',
						label: 'CSS Variables',
						href: '/customization/css-variables'
					}
				]
			}
		],
		[
			{
				id: 'actions',
				label: 'Actions',
				items: [{ id: 'collapse', label: 'Collapse', href: '/actions/collapse' }]
			},
			{
				id: 'components',
				label: 'Components',
				items: [
					{ id: 'accordion', label: 'Accordion', href: '/components/accordion' },
					{ id: 'alert', label: 'Alert', href: '/components/alert' },
					{ id: 'badge', label: 'Badge', href: '/components/badge' },
					{ id: 'button', label: 'Button', href: '/components/button' },
					{ id: 'card', label: 'Card', href: '/components/card' },
					{ id: 'checkbox', label: 'Checkbox', href: '/components/checkbox' },
					{ id: 'code', label: 'Code', href: '/components/code' },
					{ id: 'date-picker', label: 'Date Picker', href: '/components/date-picker' },
					{ id: 'datetime-picker', label: 'Datetime Picker', href: '/components/datetime-picker' },
					{ id: 'email-input', label: 'Email Input', href: '/components/email-input' },
					{ id: 'file-uploader', label: 'File Uploader', href: '/components/file-uploader' },
					{ id: 'form', label: 'Form', href: '/components/form' },
					{ id: 'heading', label: 'Heading', href: '/components/heading' },
					{ id: 'number-input', label: 'Number Input', href: '/components/number-input' },
					{ id: 'radio', label: 'Radio', href: '/components/radio' },
					{ id: 'range', label: 'Range', href: '/components/range' },
					{ id: 'select', label: 'Select', href: '/components/select' },
					{ id: 'text-input', label: 'Text Input', href: '/components/text-input' }
				]
			}
		]
	];

	let {} = $props<SideNavProps>();
</script>

<SideNav>
	{#each items as itemGroup, i}
		{#each itemGroup as { id, label, items }}
			{@const firstInGroup = i === 0}
			<SideNav.Menu
				class={firstInGroup ? 'side-nav-menu-first-in-group' : ''}
				id="side-nav-{id}"
				{label}
				open={$page.url.pathname.includes(id)}
			>
				{#each items as { id, label, href }}
					<SideNav.Link id="side-nav-{id}" {href} active={href === $page.url.pathname}
						>{label}</SideNav.Link
					>
				{/each}
			</SideNav.Menu>
		{/each}
	{/each}
</SideNav>

<style>
	:global(.side-nav__item:has(.side-nav__menu-first-in-group)) {
		border: none;
		border-top: 1px solid rgba(var(--color-dark-rgb), 0.2);
	}
</style>
