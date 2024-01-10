import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/Form.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Forms',
		description:
			'Forms are groups of related inputs that allow users to provide information and interact with the application.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
