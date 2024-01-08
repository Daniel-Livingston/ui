import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Heading/Heading.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Heading',
		description: 'A simple heading component.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
