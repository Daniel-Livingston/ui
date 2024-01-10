import type { PageLoad } from './$types';
import { getCssVariables } from '$lib/internal';
import rawComponent from '$lib/components/Form/FileUploader.svelte?raw';

export const load: PageLoad = async () => {
	return {
		title: 'File Uploader',
		description:
			'The File Uploader component allows users to select one or more files to upload from their device.',
		cssVariableAPI: getCssVariables(rawComponent, { svelte: true })
	};
};
