import { FC } from 'react';
import { Places } from '@/app/components';

import { config } from '@/config';

import { Merch } from '@/features/home/merch';
import { Numbers } from '@/features/home/numbers';
import { Pictures } from '@/features/home/pictures';
import { Speakers } from '@/features/home/speakers';
import { Support } from '@/features/home/support';

import { useTitle } from '@/shared/hooks/use-title';
import { About } from '@/widgets/about-home';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Community } from '@/widgets/community';
import { Contribute } from '@/widgets/contribute';
import { Events } from '@/widgets/events';
import { Hero } from '@/widgets/hero';

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
