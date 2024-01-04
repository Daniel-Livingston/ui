import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Accordion',
		description:
			'The accordion component can be used to optionally display content, typically in a list.'
	};
};
