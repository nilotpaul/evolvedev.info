import { getInitialThemeScript } from '../scripts/theme';
import { LinksFunction, MetaFunction } from '@remix-run/cloudflare';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';
import { useTheme } from './components/ThemeProvider';
import app, { cspHeaders } from './config/app';

import NotFound from './pages/NotFound';
import Providers from './components/Providers';
import { Toaster } from 'sonner';
import { cn } from './lib/utils';

import styles from '~/globals.css?url';

export const headers = cspHeaders();

export const meta: MetaFunction = ({ error }) => {
  if (isRouteErrorResponse(error) && error.status === 400) {
    return [
      {
        title: 'Not Found',
      },
      {
        name: 'description',
        content: 'This page does not exist',
      },
    ];
  }

  return [
    {
      title: app.title,
    },
    {
      name: 'description',
      content: app.description,
    },
    {
      property: 'og:title',
      content: app.title,
    },
    {
      property: 'og:description',
      content: app.description,
    },
    {
      property: 'og:image',
      content: app.OGImage,
    },
    {
      property: 'og:url',
      content: app.url,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: app.twitterTitle || app.title,
    },
    {
      name: 'twitter:description',
      content: app.description,
    },
    {
      name: 'twitter:image',
      content: app.twitterImage || app.OGImage,
    },
    {
      name: 'twitter:site',
      content: app.twitterHandle,
    },
  ];
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: getInitialThemeScript() }} />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-078BS298KC' />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'G-078BS298KC');`,
          }}
        />
      </head>
      <body>
        <Toaster
          cn={cn}
          closeButton
          duration={2000}
          richColors
          position='bottom-right'
          theme={theme === 'dark' ? 'dark' : 'light'}
        />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Providers>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Providers>
  );
}

export function ErrorBoundary() {
  const err = useRouteError();

  if (isRouteErrorResponse(err) && err.status === 404) {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <Meta />
          <Links />
          <script dangerouslySetInnerHTML={{ __html: getInitialThemeScript() }} />
        </head>
        <body>
          <Providers>
            <NotFound />
          </Providers>
        </body>
      </html>
    );
  }

  return <pre className='prose dark:prose-invert'>{JSON.stringify(err)}</pre>;
}
