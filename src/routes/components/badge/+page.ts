import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Badge/Badge.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Badge',
		description:
			'The badge component can be used to label, categorize, or organize items on the page.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
