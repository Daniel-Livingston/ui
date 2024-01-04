import hljs from 'highlight.js';

export const highlight = (code: string, lang: string = '') => {
	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
	return hljs.highlight(code, { language }).value;
};
