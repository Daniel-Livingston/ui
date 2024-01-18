export function fixCodeSnippet(code: string) {
	return code.replace(/\$lib/g, '@daniel-livingston/ui');
}

export function getCssVariables(code: string, { svelte = false }: { svelte?: boolean }) {
	if (svelte) {
		const match = code.match(/(:global\(:root\) {[^}]+})/);
		const cssVariables = match ? match[1].replace(':global(:root)', ':root') : '';
		// Get rid of extra tabs.
		return cssVariables
			.split('\n')
			.map((line) => {
				if (line.startsWith('\t')) {
					return line.replace('\t', '');
				}
				return line;
			})
			.join('\n');
	} else {
		const match = code.match(/(:root {[^}]+})/);
		return match ? match[1] : '';
	}
}
