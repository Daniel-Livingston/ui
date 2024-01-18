import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Badge/Badge.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Badge',
		description:
			'The badge component can be used to label, categorize, or organize items on the page.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [
			'Overview',
			{ label: 'Usage', items: ['Variants'] },
			{ label: 'API', items: ['CSS Variables'] }
		]
	};
};
