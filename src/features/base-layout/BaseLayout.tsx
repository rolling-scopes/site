import { Outlet } from 'react-router-dom';
import { Footer, Partnered, Navbar, ScrollToHashElement } from '../../app/components';

export const BaseLayout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <Partnered />
    <Footer />
  </>
);
