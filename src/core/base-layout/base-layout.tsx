import { PropsWithChildren } from 'react';
import { Footer, Header, Partnered } from './components';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Partnered />
      <Footer />
    </>
  );
};
