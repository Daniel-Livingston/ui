import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/Form.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Forms',
		description:
			'Forms are groups of related inputs that allow users to provide information and interact with the application.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: ['Overview', 'Usage', { label: 'API', items: ['CSS Variables'] }]
	};
};
