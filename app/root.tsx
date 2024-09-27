import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import NextTopLoader from 'nextjs-toploader';
import type { LinksFunction } from '@remix-run/node';

import './app.scss';

export const links: LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="RS School offers free, community-driven education courses run by The Rolling Scopes developer community since 2013. Enhance your web development, JavaScript, and front-end skills with us."
        />
        <title>RS Site</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function App() {
  if (typeof window !== 'undefined' && window.location.hostname.includes('rollingscopes.com')) {
    window.location.href = 'https://rs.school';
  }
  <div className="app-styles">
    <NextTopLoader
      color="black"
      initialPosition={0.0001}
      crawl={false}
      easing="ease-in-out"
      showSpinner={false}
      speed={300}
    />
    <Outlet />
  </div>;
}
