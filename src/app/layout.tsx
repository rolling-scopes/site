import { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { BaseLayout } from '@/widgets/base-layout';
import type { Metadata } from 'next';
import '@/shared/helpers/dayJS';

import '@/core/styles/index.scss';

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'RS Site',
  description:
    'RS School offers free, community-driven education courses run by The Rolling Scopes developer community since 2013. Enhance your web development, JavaScript, and front-end skills with us.',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        url: '/favicon.ico',
      },
    ],
  },
  other: { preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'] },
};

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="app-styles">
            <NextTopLoader
              color="black"
              initialPosition={0.0001}
              crawl={false}
              easing="ease-in-out"
              showSpinner={false}
              speed={300}
            />
            <BaseLayout>{children}</BaseLayout>
          </div>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
