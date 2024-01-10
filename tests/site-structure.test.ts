import { expect, test } from '@playwright/test';

test('all components exported in lib are in side nav', async ({ page }) => {
	await page.goto('/');
});

test('all pages in side nav are reachable', async ({ page }) => {
	await page.goto('/');
	for (const link of await page.locator('side-nav').getByRole('link').all()) {
		const href = await link.getAttribute('href');
		const response = await page.goto(href!);
		expect(response?.status()).toBe(200);
	}
});
