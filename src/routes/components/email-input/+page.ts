import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/EmailInput.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Email Input',
		description: 'Email inputs allow users to enter their email address.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
