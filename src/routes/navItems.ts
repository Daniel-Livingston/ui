const navItems = [
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
				{ id: 'code', label: 'Code', href: '/components/code' },
				{ id: 'form', label: 'Form', href: '/components/form' },
				{ id: 'heading', label: 'Heading', href: '/components/heading' },
				{ id: 'text-input', label: 'Text Input', href: '/components/text-input' }
			]
		}
	]
];

export default navItems;
