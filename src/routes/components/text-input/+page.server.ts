import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/TextInput.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Text Input',
		description:
			'Text inputs allow users to provide free-form text data. Typically, these are used for short, one-line inputs like names.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [{ label: 'Usage', items: ['Basic', 'Options'] }]
	};
};
