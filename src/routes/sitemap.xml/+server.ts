import { join } from 'path';
import { readdir, lstat } from 'fs/promises';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url: { origin } }) => {
	const routes = await getRoutes();

	const response = new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${routes
			.map(
				(route) => `<url>
			<loc>${origin}${route}</loc>
		</url>`
			)
			.join('')}
</urlset>
`
	);
	response.headers.set('content-type', 'application/xml');
	return response;
};

const basePath = './src/routes';
async function getRoutes(routes: string[] = [], currentPath: string = '/') {
	const routesInCurrentPath = await readdir(join(basePath, currentPath));

	if (routesInCurrentPath.includes('+page.svelte' || '+server.ts')) {
		routes.push(currentPath);
	}

	for (const file of routesInCurrentPath.filter((file) => !file.startsWith('+'))) {
		const routePath = join(currentPath, file);
		const filePath = join(basePath, routePath);

		const stats = await lstat(filePath);

		if (stats.isDirectory()) {
			await getRoutes(routes, routePath);
		}
	}

	return routes;
}
