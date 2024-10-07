'use client';
import { useEffect } from 'react';
import { Footer, Header, Partnered, ScrollToHashElement } from './components';

type BaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname.includes('rollingscopes.com')) {
      window.location.href = 'https://rs.school';
    }
  }, []);
  return (
    <>
      {/* <ScrollRestoration /> */}
      <ScrollToHashElement />
      <Header />
      {children}
      {/* <Outlet /> */}
      <Partnered />
      <Footer />
    </>
  );
};
