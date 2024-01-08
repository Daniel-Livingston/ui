import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Accordion/Accordion.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Accordion',
		description:
			'Accordions can be used to optionally reveal or hide sections of content. This is typically done through user interaction.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
