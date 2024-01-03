import type { Action } from 'svelte/action';

const collapse: Action = (node, params) => {
	return {
		destroy() {
			// clean up
		},
		update(params) {
			// update
		}
	};
};

export default collapse;
