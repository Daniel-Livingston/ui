import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url: { origin } }) => {
	const response = new Response(
		`User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`
	);
	response.headers.set('content-type', 'text/plain');
	return response;
};
