import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Button',
		description:
			'The button component can be used to provide user interaction with elements on the page.'
	};
};
