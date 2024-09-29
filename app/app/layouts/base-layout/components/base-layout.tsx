import { ScrollRestoration } from 'react-router-dom';
import ClientOnly from '../client-only/client-only';
import {
  Footer,
  Header,
  Partnered,
  ScrollToHashElement,
} from '@/app/layouts/base-layout/components';

type BaseLayoutProps = {
  children: React.ReactNode;
};
export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <ScrollRestoration />
      <ScrollToHashElement />
      <ClientOnly>
        <Header />
      </ClientOnly>
      {children}
      <Partnered />
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </>
  );
}
