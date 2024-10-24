import { FC } from 'react';
import { PAGE_NAMES } from '@/shared/constants';
import { AboutCommunity } from '@/widgets/about-community';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { CommunityMedia } from '@/widgets/community-media';
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
      <CommunityMedia />
      <Contribute />
      <Support />
    </>
  );
};

export default Community;
