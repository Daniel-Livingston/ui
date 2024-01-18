import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Alert/Alert.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Alert',
		description:
			'The alert component can be used to display important messages to the user. These alerts can typically be dismissed.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [
			'Overview',
			{ label: 'Usage', items: ['Variants', 'With Icons', 'Dismissible'] },
			{ label: 'API', items: ['CSS Variables'] }
		]
	};
};
