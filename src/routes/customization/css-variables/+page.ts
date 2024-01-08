import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'CSS Variables',
		description: 'Fully customize the appearance of components by overriding CSS variables.'
	};
};
