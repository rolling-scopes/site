import { FC } from 'react';
import { Places } from '@/app/components';
import { useTitle } from '@/app/hooks/use-title/use-title';
import { config } from '@/config';
import {
  About,
  Community,
  Contribute,
  Events,
  Hero,
  Merch,
  Numbers,
  Pictures,
  Speakers,
  Support,
} from '@/features/home';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';

export const Home: FC = () => {
  useTitle(`Home · ${config.title}`);

  return (
    <>
      <Hero />
      <Breadcrumbs />
      <About />
      <Numbers />
      <Places />
      <Pictures />
      <Events />
      <Speakers />
      <Merch />
      <Community />
      <Contribute />
      <Support />
    </>
  );
};
