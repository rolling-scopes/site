import { FC } from 'react';
import { PAGE_NAMES } from '@/shared/constants';
import { AboutCommunity } from '@/widgets/about-community';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Community as CommunitySection } from '@/widgets/community';
import { Contribute } from '@/widgets/contribute';
import { Events } from '@/widgets/events';
import { HeroPage } from '@/widgets/hero-page';
import { Merch } from '@/widgets/merch';
import { Numbers } from '@/widgets/numbers';
import { Pictures } from '@/widgets/pictures';
import { Places } from '@/widgets/places';
import { Speakers } from '@/widgets/speakers';
import { Support } from '@/widgets/support';

const Community: FC = () => {
  return (
    <>
      <HeroPage pageName={PAGE_NAMES.COMMUNITY} />
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

export default Community;
