import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Header, Partnered, ScrollToHashElement } from './components';

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
