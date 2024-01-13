import { writable } from 'svelte/store';

const seo = writable({
	site: ''
});

export default seo;
