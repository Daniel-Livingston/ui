import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';
import { createPageMessage, getSiteLinks } from './utils';

test('content headings have correct structure', async ({ page }) => {
	const msg = createPageMessage(page);
	const siteLinks = await getSiteLinks(page);
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const headingData = await getContentHeadingData(page);

		for (const { id, label } of headingData) {
			expect(label, msg(`Heading has no label.`)).toBeTruthy();
			expect(id, msg(`Heading ${label} has null id attribute.`)).toBeTruthy();
		}
	}
});

test('toc links have correct structure', async ({ page }) => {
	const msg = createPageMessage(page);
	const siteLinks = await getSiteLinks(page);
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const tocData = await getTocLinkData(page);

		for (const { href, label } of tocData) {
			expect(label, msg(`Link has no label.`)).toBeTruthy();
			expect(href, msg(`Link ${label} has null href attribute.`)).toBeTruthy();
		}
	}
});

test('there are no duplicate toc links', async ({ page }) => {
	const msg = createPageMessage(page);
	const siteLinks = await getSiteLinks(page);
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const tocData = await getTocLinkData(page);
		const hrefs = tocData.map(({ href }) => href);

		expect(hrefs, msg('There exists a duplicate toc link.')).toHaveLength(
			[...new Set(hrefs)].length
		);
	}
});

test('there are no duplicate content headings', async ({ page }) => {
	const msg = createPageMessage(page);
	const siteLinks = await getSiteLinks(page);
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const headingData = await getContentHeadingData(page);
		const ids = headingData.map(({ id }) => id);

		expect(ids, msg('There exists a duplicate heading id attribute.')).toHaveLength(
			[...new Set(ids)].length
		);
	}
});

test('all content headings have a corresponding toc link', async ({ page }) => {
	const msg = createPageMessage(page);
	const siteLinks = await getSiteLinks(page);
	for (const siteLink of siteLinks) {
		await page.goto(siteLink);

		const headingData = await getContentHeadingData(page);
		const tocData = await getTocLinkData(page);

		for (const { id } of headingData) {
			expect(
				tocData.map(({ href }) => href),
				msg(`Heading with id ${id} is not in the toc.`)
			).toContain(`#${id}`);
		}
	}
});

async function getContentHeadingData(page: Page) {
	const headings = await page.locator('.content > .readable > .heading').all();
	const headingData: { id: string; label: string }[] = [];

	for (const heading of headings) {
		const id = (await heading.getAttribute('id')) || '';
		const label = (await heading.textContent()) || '';

		headingData.push({ id, label });
	}

	return headingData;
}

async function getTocLinkData(page: Page) {
	const tocLinks = await page.locator('.toc').first().locator('a').all();
	const tocData: { href: string; label: string }[] = [];

	for (const tocLink of tocLinks) {
		const href = (await tocLink.getAttribute('href')) || '';
		const label = (await tocLink.textContent()) || '';

		tocData.push({ href: href!, label: label! });
	}

	return tocData;
}
