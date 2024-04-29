import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Partnered, ScrollToHashElement } from './components';

export const Component = () => (
  <>
    <ScrollToHashElement />
    <Navbar />
    <Outlet />
    <Partnered />
    <Footer />
  </>
);

Component.displayName = 'BaseLayout';
