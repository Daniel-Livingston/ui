import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/Range.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Range',
		description: 'The range component provides a visual alternative to a number input.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
