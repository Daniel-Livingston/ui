import type { Action } from 'svelte/action';

const visuallyHidden: Action = (node, params) => {
	return {
		destroy() {
			// clean up
		},
		update(params) {
			// update
		}
	};
};

export default visuallyHidden;
