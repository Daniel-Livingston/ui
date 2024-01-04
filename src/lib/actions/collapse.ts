import type { Action } from 'svelte/action';

type CollapseParams = {
	collapsed: boolean;
	controller: HTMLElement;
};

const collapse: Action<HTMLElement, CollapseParams> = (node, { collapsed, controller }) => {
	if (!node.id) {
		throw new Error('Collapse action requires a unique id on the element');
	}

	node.classList.add('collapsible');
	controller.setAttribute('aria-controls', node.id);
	handleCollapse(node, { collapsed, controller });

	return {
		update({ collapsed, controller }) {
			handleCollapse(node, { collapsed, controller });
		}
	};
};

function handleCollapse(node: HTMLElement, { collapsed, controller }: CollapseParams) {
	if (collapsed) {
		node.classList.add('collapsed');
		controller.setAttribute('aria-expanded', 'false');
	} else {
		node.classList.remove('collapsed');
		controller.setAttribute('aria-expanded', 'true');
	}
}

export default collapse;
