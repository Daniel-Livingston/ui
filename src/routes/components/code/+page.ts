import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Code snippet',
		description:
			'The code snippet component can be used to display code examples, typically in documentation.'
	};
};
