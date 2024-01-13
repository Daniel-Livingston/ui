import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		title: 'Collapse',
		description:
			'The collapse action can be used to toggle the visibility of content. This is typically used in components like accordions where content would be displayed in a list.',
		toc: []
	};
};
