import { LoaderFunction } from '@remix-run/cloudflare';
import { NAV_LINKS } from '~/config/site-links';

const siteUrl = !import.meta.env.PROD ? 'http://localhost:5175' : 'https://evolvedev.info';

const makeUrl = (path: string, lastMod: Date) =>
  `<url><loc>${siteUrl}${path}</loc><lastmod>${lastMod.toISOString()}</lastmod></url>`;

export const loader: LoaderFunction = async () => {
  const now = new Date();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${NAV_LINKS.map(({ path }) => makeUrl(path === '/' ? '' : path, now)).join('')}
            </urlset>
            `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};
