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
  }, [pathname]);

  return (
    <GoogleAnalytics gaId="G-THXM004SPR" />
  );
};
