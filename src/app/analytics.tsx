'use client';

import Script from 'next/script';

export const Analytics = () => {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js? id=G-THXM004SPR" />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'G-THXM004SPR');
        `}
      </Script>
    </>
  );
};
