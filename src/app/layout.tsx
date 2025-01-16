import { PropsWithChildren } from 'react';

import { Analytics } from './analytics';
import { BaseLayout } from '@/core/base-layout';
import '@/shared/helpers/dayJS';
import type { Metadata } from 'next';

import '@/core/styles/index.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="app-styles">
            <BaseLayout>{children}</BaseLayout>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
