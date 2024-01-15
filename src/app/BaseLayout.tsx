import { Outlet } from 'react-router-dom';
import { FooterPartners, Navbar, ScrollToHashElement } from './components';

export const BaseLayout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <FooterPartners />
  </>
);
