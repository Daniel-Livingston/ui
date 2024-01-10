import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/DateTimePicker.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'Datetime Picker',
		description:
			'The Datetime Picker component allows users to select a date and time from a calendar or enter it manually.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
