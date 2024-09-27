import { FC } from 'react';
import { useTitle } from '@/shared/hooks/use-title';
import { AboutCommunity } from '@/widgets/about-community';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Community as CommunitySection } from '@/widgets/community';
import { Contribute } from '@/widgets/contribute';
import { Events } from '@/widgets/events';
import { Hero } from '@/widgets/hero';
import { Merch } from '@/widgets/merch';
import { Numbers } from '@/widgets/numbers';
import { Pictures } from '@/widgets/pictures';
import { Places } from '@/widgets/places';
import { Speakers } from '@/widgets/speakers';
import { Support } from '@/widgets/support';

export const Community: FC = () => {
  useTitle(`Community · The Rolling Scopes School`);

  return (
    <>
      <Hero />
      <Breadcrumbs />
      <AboutCommunity />
      <Numbers />
      <Places />
      <Pictures />
      <Events />
      <Speakers />
      <Merch />
      <CommunitySection />
      <Contribute />
      <Support />
    </>
  );
};
