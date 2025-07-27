import { Fragment } from 'react';

import { courseStore } from '@/entities/course';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { landingPageStore } from '@/entities/landing-page/model/store';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { SectionResolver } from '@/widgets/section-resolver';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';

export const Home = async () => {
  const [{ sections }, courses] = await Promise.all([
    landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.HOME),
    courseStore.loadCourses(),
  ]);

  return sections.map((section, index) => (
    <Fragment key={section.id}>
      <SectionResolver courses={courses} anchorId={index.toString()} section={section} />
      {section.name === SECTION_TYPE.HERO && <Breadcrumbs />}
    </Fragment>
  ));
};
