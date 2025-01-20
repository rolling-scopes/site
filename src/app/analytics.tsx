'use client';

import { useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

export const Analytics = () => {
  const pathname = usePathname();
  const isRunningInProd = process.env.NODE_ENV === 'production';

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    if (!isRunningInProd) {
      window.dataLayer.push({
        event: 'page_view',
        page: pathname,
      });
    }
  }, [isRunningInProd, pathname]);

  if (!isRunningInProd) {
    return null;
  }

  return (
    <GoogleAnalytics gaId="G-THXM004SPR" />
  );
};
