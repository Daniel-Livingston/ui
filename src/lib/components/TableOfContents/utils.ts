type Item = {
	id: string;
	label: string;
	href: string;
	items?: Item[];
};

export function getTocItems(content?: HTMLElement) {
	if (!content) return [];

	const items: Item[] = [];

	const headings = content.querySelectorAll('h2.heading, h3.heading');

	let nestedItems: Item[] = [];
	for (let i = 0; i < headings.length; i++) {
		const id = headings[i].id;
		const label = headings[i].textContent || id;
		const href = `#${id}`;
		const level = parseInt(headings[i].tagName[1], 10);

		if (i === 0) {
			items.push({ id, label, href });
			continue;
		}

		if (level === 2) {
			if (nestedItems.length > 0) {
				items[items.length - 1].items = nestedItems;
				nestedItems = [];
			}

			items.push({ id, label, href });
			continue;
		}

		if (level === 3) {
			nestedItems.push({ id, label, href });
		}

		if (i === headings.length - 1) {
			if (nestedItems.length > 0) {
				items[items.length - 1].items = nestedItems;
			}
		}
	}

	return items;
}
