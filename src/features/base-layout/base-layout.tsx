import { Outlet } from 'react-router-dom';
import { Footer, Header, Partnered, ScrollToHashElement } from './components';

export const BaseLayout = () => {
  return (
    <>
      <ScrollToHashElement />
      <Header />
      <Outlet />
      <Partnered />
      <Footer />
    </>
  );
};
