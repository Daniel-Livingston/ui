import type { PageServerLoad } from './$types';
import { getCssVariables } from '$lib/internal/utils';
import rawComponent from '$lib/components/Form/FileUploader.svelte?raw';

export const load: PageServerLoad = async () => {
	return {
		title: 'File Uploader',
		description:
			'The File Uploader component allows users to select one or more files to upload from their device.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true }),
		toc: [{ label: 'Usage', items: ['Basic'] }]
	};
};
