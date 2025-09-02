import { Fragment } from 'react';

import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { landingPageStore } from '@/entities/landing-page/model/store';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { SectionResolver } from '@/widgets/section-resolver';

export const Home = async () => {
  const { sections } = await landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.HOME);

  return sections.map((section) => (
    <Fragment key={section.id}>
      <SectionResolver section={section} />
      {isHeroSection(section.name) && <Breadcrumbs />}
    </Fragment>
  ));
};
