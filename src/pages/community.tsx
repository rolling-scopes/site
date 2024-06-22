import { FC } from 'react';
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
import { Places } from '@/widgets/places';
import { Speakers } from '@/widgets/speakers';
import { Support } from '@/widgets/support';

export const CommunityPage: FC = () => {
  useTitle(`Community · The Rolling Scopes School`);

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
