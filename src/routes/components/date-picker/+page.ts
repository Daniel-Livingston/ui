import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/DatePicker.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Date Picker',
		description:
			'The Date Picker component allows users to select a date from a calendar or enter it manually.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
