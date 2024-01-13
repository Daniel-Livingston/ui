import type { Page } from '@playwright/test';

export function createPageMessage(page: Page) {
	return (msg: string) => {
		const currentPath = new URL(page.url()).pathname;
		return `${currentPath}: ${msg}`;
	};
}

export async function getSiteLinks(page: Page) {
	await page.goto('/sitemap.xml');
	return await page.locator('loc').allTextContents();
}
