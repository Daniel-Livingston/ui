import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/Range.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Range',
		description: 'The range component provides a visual alternative to a number input.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [{ label: 'Usage', items: ['Basic'] }]
	};
};
