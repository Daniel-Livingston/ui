import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/Radio.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Radio',
		description:
			'Radios are used for mutually exclusive choices. Only one radio in a group can be selected at a time.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
