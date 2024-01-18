import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/Select.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Select',
		description: 'The Select component is used to select a single option from a list of options.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [{ label: 'Usage', items: ['Basic'] }]
	};
};
