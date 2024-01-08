import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Button/Button.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Button',
		description:
			'The button component can be used to provide user interaction with elements on the page.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
