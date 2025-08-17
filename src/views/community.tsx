import { Fragment } from 'react';

import { landingPageStore } from '@/entities/landing-page';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { SectionResolver } from '@/widgets/section-resolver';

const Community = async () => {
  const { sections } = await landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.COMMUNITY);

  return sections.map((section) => (
    <Fragment key={section.id}>
      <SectionResolver section={section} />
      {isHeroSection(section.name) && <Breadcrumbs />}
    </Fragment>
  ));
};

export default Community;
