import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/Checkbox.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Checkbox',
		description:
			'Checkboxes can be used to select multiple options from a list, or to provide the optional selection of a single item.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
