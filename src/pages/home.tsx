import { FC } from 'react';
import { Places } from '@/app/components';
import { config } from '@/config';
import { useTitle } from '@/shared/hooks/use-title';
import { About } from '@/widgets/about-home';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Community } from '@/widgets/community';
import { Contribute } from '@/widgets/contribute';
import { Events } from '@/widgets/events';
import { Hero } from '@/widgets/hero';
import { Merch } from '@/widgets/merch';
import { Numbers } from '@/widgets/numbers';
import { Pictures } from '@/widgets/pictures';
import { Speakers } from '@/widgets/speakers';
import { Support } from '@/widgets/support';

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
