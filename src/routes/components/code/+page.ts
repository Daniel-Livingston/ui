import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Code/Code.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Code Snippet',
		description: 'Code snippets are used to display code examples, typically in documentation.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
