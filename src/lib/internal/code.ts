export function fixCodeSnippet(code: string) {
	return code.replace(/\$lib/g, '@daniel-livingston/components');
}
