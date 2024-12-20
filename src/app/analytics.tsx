'use client';

import { useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

export const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page: pathname,
    });

    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'G-THXM004SPR', { page_view: pathname });
    // }
  }, [pathname]);

  return (
    <GoogleAnalytics gaId="G-THXM004SPR" />
  );
};
