export const loader = () => {
  const robots = `
User-Agent: *
Allow: /
Disallow:

Sitemap: https://evolvedev.info/sitemap.xml
`.trim();

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
    },
  });
};
