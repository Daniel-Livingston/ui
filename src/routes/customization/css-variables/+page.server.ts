import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'CSS Variables',
		description: 'Fully customize the appearance of components by overriding CSS variables.',
		toc: ['Overview', 'Theme Variables']
	};
};
