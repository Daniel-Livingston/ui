export function fixCodeSnippets(code: string) {
	return code.replace(/\$lib/g, '@daniel-livingston/components');
}
