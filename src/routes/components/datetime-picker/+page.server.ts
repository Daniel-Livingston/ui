import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/DateTimePicker.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'Datetime Picker',
		description:
			'The Datetime Picker component allows users to select a date and time from a calendar or enter it manually.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [{ label: 'Usage', items: ['Basic'] }]
	};
};
