import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Partnered, ScrollToHashElement } from './components';
import Loader from '@/features/loader/loader.tsx';

export const BaseLayout = () => {
  return (
    <>
      <Loader />
      <ScrollToHashElement />
      <Navbar />
      <Outlet />
      <Partnered />
      <Footer />
    </>
  );
};
