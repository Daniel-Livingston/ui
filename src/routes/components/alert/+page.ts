import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Alert/Alert.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Alert',
		description:
			'The alert component can be used to display important messages to the user. These alerts can typically be dismissed.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
