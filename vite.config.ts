import { vitePlugin as remix, cloudflareDevProxyVitePlugin } from '@remix-run/dev';
import { getLoadContext } from './load-context';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { routesConfig } from './app/router';

export default () => {
  return defineConfig({
    server: {
      port: 5175,
      // Proxy here is not required anymore as cloudflare doesn't support it.
      // Made an internal proxy with loaders and actions.
      proxy: {},
    },
    plugins: [
      cloudflareDevProxyVitePlugin({ getLoadContext }),
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
        ssr: true,
        routes: (defineRoutes) => defineRoutes(routesConfig),
      }),
      tsconfigPaths(),
    ],
  });
};
