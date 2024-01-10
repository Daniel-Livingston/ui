import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/Select.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Select',
		description: 'The Select component is used to select a single option from a list of options.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
