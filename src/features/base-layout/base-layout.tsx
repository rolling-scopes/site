import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer, Navbar, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Partnered />
      <Footer />
    </>
  );
};
