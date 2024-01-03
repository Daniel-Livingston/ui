import type { Action } from 'svelte/action';

const tooltip: Action = (node, params) => {
	return {
		destroy() {
			// clean up
		},
		update(params) {
			// update
		}
	};
};

export default tooltip;
