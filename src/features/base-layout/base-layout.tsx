import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Partnered />
      <Footer />
    </>
  );
};
