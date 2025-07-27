import { Fragment } from 'react';

import { courseStore } from '@/entities/course';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { getSectionId } from '@/entities/landing-page/helpers/get-section-id';
import { landingPageStore } from '@/entities/landing-page/model/store';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { SectionResolver } from '@/widgets/section-resolver';

export const Home = async () => {
  const [{ sections }, courses] = await Promise.all([
    landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.HOME),
    courseStore.loadCourses(),
  ]);

  return sections.map((section) => (
    <Fragment key={section.id}>
      <SectionResolver
        courses={courses}
        anchorId={getSectionId('title' in section.data ? section.data.title : '')}
        section={section}
      />
      {isHeroSection(section.name) && <Breadcrumbs />}
    </Fragment>
  ));
};
