import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/NumberInput.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Number Input',
		description:
			'Number inputs allow users to enter numeric values. They can incrementally increase or decrease the value by specified steps.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
