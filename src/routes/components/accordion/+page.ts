import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Accordion',
		description:
			'Accordions can be used to optionally reveal or hide sections of content. This is typically done through user interaction.'
	};
};
