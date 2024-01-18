import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/Checkbox.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Checkbox',
		description:
			'Checkboxes can be used to select multiple options from a list, or to provide the optional selection of a single item.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [
			{ label: 'Usage', items: ['Basic'] },
			{ label: 'API', items: ['CSS Variables'] }
		]
	};
};
