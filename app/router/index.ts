import { DefineRouteFunction } from '@remix-run/dev/dist/config/routes';

export const routesConfig = (routes: DefineRouteFunction) => {
  // '/' -> route will only render the marketing page.
  routes('/', 'pages/Marketing.tsx', { index: true });

  // Default HomePage for all routes after '/*'
  routes('/', 'pages/Home.tsx', () => {
    // All nested routes will inherit the layout of the parent route i.e. Home
    routes('/about', 'pages/About.tsx');
    routes('/contact', 'pages/Contact.tsx');
  });

  // Loaders and Actions
  routes('/sitemap.xml', 'server/loaders/sitemap.loader.ts');
  routes('/robots.txt', 'server/loaders/robots.loader.ts');

  // Catch all routes that doesn't exists and show a 404 page.
  routes('*', 'pages/NotFound.tsx', { id: '404' });
};
