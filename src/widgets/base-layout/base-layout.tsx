'use client';

import { PropsWithChildren, useEffect } from 'react';
import { Footer, Header, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('rollingscopes.com')) {
      window.location.href = 'https://rs.school';
    }
  }, []);
  return (
    <>
      <ScrollToHashElement />
      <Header />
      {children}
      <Partnered />
      <Footer />
    </>
  );
};
