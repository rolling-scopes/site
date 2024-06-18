import { FC } from 'react';
import { Places } from '@/app/components';

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
import { useTitle } from '@/shared/hooks/use-title';
import { Breadcrumbs } from '@/widgets/breadcrumbs';

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
