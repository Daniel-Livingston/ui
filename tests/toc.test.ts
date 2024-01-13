import { expect, test } from '@playwright/test';

test('table of contents matches content', async ({ page }) => {
	const createMessage = (msg: string) => {
		const currentPath = new URL(page.url()).pathname;
		return `${currentPath}: ${msg}`;
	};

	await page.goto('/sitemap.xml');

	const siteLinks = await page.locator('loc').allTextContents();
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const headings = await page.locator('.content > .readable > .heading').all();
		const headingData: { id: string; label: string }[] = [];
		for (const heading of headings) {
			const id = await heading.getAttribute('id');
			const label = await heading.textContent();

			// Will return an error if any heading in the content section doesn't have an id.
			expect(id, createMessage(`Heading ${heading} has null id attribute.`)).not.toBeNull();

			// Will return an error if any heading in the content section doesn't have a label.
			expect(label, createMessage(`Heading ${heading} has null label.`)).not.toBeNull();

			headingData.push({ id: id!, label: label! });
		}

		// Will return an error if there are any headings with duplicate ids.
		const ids = headingData.map(({ id }) => id);
		expect(ids, createMessage('There exists a duplicate heading id attribute.')).toHaveLength(
			[...new Set(ids)].length
		);

		const tocLinks = await page.locator('.toc').first().locator('a').all();
		const tocData: { href: string; label: string }[] = [];
		for (const tocLink of tocLinks) {
			const href = await tocLink.getAttribute('href');
			const label = await tocLink.textContent();

			// Will return an error if any toc link doesn't have a valid href.
			expect(href, createMessage(`Link ${tocLink} has null href attribute.`)).not.toBeNull();

			// Will return an error if any toc link doesn't have a label.
			expect(label, createMessage(`Link ${tocLink} has null label.`)).not.toBeNull();

			tocData.push({ href: href!, label: label! });
		}

		// Will return an error if there are any toc links with duplicate hrefs.
		const hrefs = tocData.map(({ href }) => href);
		expect(hrefs, createMessage('There exists a duplicate link href attribute.')).toHaveLength(
			[...new Set(hrefs)].length
		);

		// Will return an error if any heading id is not in the toc.
		for (const { id } of headingData) {
			expect(
				tocData.map(({ href }) => href),
				createMessage(`Heading with id ${id} is not in the toc.`)
			).toContain(`#${id}`);
		}

		// Will return an error if any toc link is not in the content section.
		for (const { href } of tocData) {
			expect(
				headingData.map(({ id }) => id),
				createMessage(`Link with href ${href} does not have a corresponding heading`)
			).toContain(href.replace('#', ''));
		}
	}
});
