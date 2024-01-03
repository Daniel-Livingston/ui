import type { Action } from 'svelte/action';

const toggletip: Action = (node, params) => {
	return {
		destroy() {
			// clean up
		},
		update(params) {
			// update
		}
	};
};

export default toggletip;
