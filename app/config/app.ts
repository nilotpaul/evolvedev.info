import { HeadersFunction } from '@remix-run/node';

export const cacheHeaders = (): HeadersFunction => {
  return ({ loaderHeaders, actionHeaders, parentHeaders }) => {
    return {
      ...Object.fromEntries(loaderHeaders),
      ...Object.fromEntries(actionHeaders),
      ...Object.fromEntries(parentHeaders),
      'Cache-Control': 'max-age=604800, stale-while-revalidate=86400',
    };
  };
};

export const cspHeaders = (): HeadersFunction => {
  return () => ({
    // Content Security Policy (CSP)
    'Content-Security-Policy':
      "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' https://media.graphassets.com https://avatars.githubusercontent.com https://www.google-analytics.com https://static.cloudflareinsights.com; connect-src 'self' https://evolveasdev.com https://*.evolveasdev.com https://www.google-analytics.com https://static.cloudflareinsights.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-ancestors 'none';",
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    // Enable XSS filter
    'X-XSS-Protection': '1; mode=block',
    // Ensure browsers only use secure connections
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    // Enable HTTP to HTTPS upgrade
    'Upgrade-Insecure-Requests': '1',
  });
};

const SITE_TITLE = 'Evolve Dev';
const SITE_DESCRIPTION =
  'At Evolve Dev, our goal is to make development faster and more efficient. We provide tools and guidance to streamline project creation, handle changes seamlessly, and support developers at every stage.';
const SITE_OG_IMAGE = '/banner.png';
const SITE_DOMAIN = 'https://evolvedev.info';

export default {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  OGImage: SITE_OG_IMAGE,
  twitterCard: 'summary_large_image',
  twitterTitle: SITE_TITLE,
  twitterDescription: SITE_DESCRIPTION,
  twitterImage: SITE_OG_IMAGE,
  twitterHandle: '@evolvedev_pvt',
  linkedinTitle: SITE_TITLE,
  linkedinDescription: SITE_DESCRIPTION,
  linkedinImage: SITE_OG_IMAGE,
  url: SITE_DOMAIN,
};
