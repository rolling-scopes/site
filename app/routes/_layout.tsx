import { Outlet, ScrollRestoration } from 'react-router-dom';
import {
  Footer,
  Header,
  Partnered,
  ScrollToHashElement,
} from '@/app/layouts/base-layout/components';

export const BaseLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <ScrollToHashElement />
      <Header />
      <Outlet />
      <Partnered />
      <Footer />
    </>
  );
};
