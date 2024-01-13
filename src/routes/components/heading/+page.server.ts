import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Heading/Heading.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Heading',
		description: 'A simple heading component.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: ['Overview', { label: 'API', items: ['CSS Variables'] }]
	};
};
