import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Alert',
		description:
			'The alert component can be used to display important messages to the user. These alerts can typically be dismissed.'
	};
};
