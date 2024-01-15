import { Navbar } from '@/shared/UI';
import { ScrollToHashElement } from './components/ScrollToHash';
import { Outlet } from 'react-router-dom';
import { FooterPartners } from './components/footerPartners';

export const BaseLayout = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <FooterPartners />
  </>
);
