import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <Partnered />
    <Footer />
  </>
);
