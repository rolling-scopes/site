import { Outlet } from 'react-router-dom';
import { Navbar, Footer, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <Partnered />
    <Footer />
  </>
);
