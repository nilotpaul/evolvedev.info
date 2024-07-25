import { HeadersFunction } from '@remix-run/node';

export const cacheHeaders = (): HeadersFunction => {
  return () => ({
    'Cache-Control': 'max-age=604800, stale-while-revalidate=86400',
  });
};
