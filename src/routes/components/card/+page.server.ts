import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Card/Card.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Card',
		description:
			'The card component can be used to group content in a visually appealing container.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: ['Overview', 'Usage']
	};
};
