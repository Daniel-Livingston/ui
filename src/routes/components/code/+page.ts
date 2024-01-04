import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Code snippet',
		description: 'Code snippets are used to display code examples, typically in documentation.'
	};
};
