import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Button/Button.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Button',
		description:
			'The button component can be used to provide user interaction with elements on the page.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [
			'Overview',
			{ label: 'Usage', items: ['Variants', 'Sizes', 'Rounded', 'Disabled'] },
			{ label: 'API', items: ['CSS Variables'] }
		]
	};
};
