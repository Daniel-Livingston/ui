export function fixCodeSnippet(code: string) {
	return code.replace(/\$lib/g, '@daniel-livingston/ui');
}

export function getCssVariables(code: string, { svelte = false }: { svelte?: boolean }) {
	if (svelte) {
		const match = code.match(/(:global\(:root\) {[^}]+})/);
		return match ? match[1].replace(':global(:root)', ':root') : '';
	} else {
		const match = code.match(/(:root {[^}]+})/);
		return match ? match[1] : '';
	}
}
