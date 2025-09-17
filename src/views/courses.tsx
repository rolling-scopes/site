import { Fragment } from 'react';

import { PAGE_TYPE } from '@/entities/page/constants';
import { pageStore } from '@/entities/page/model/store';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { SectionResolver } from '@/widgets/section-resolver';

export const Courses = async () => {
  const { sections } = await pageStore.loadPage(PAGE_TYPE.COURSES);

  return sections.map((section) => (
    <Fragment key={section.id}>
      <SectionResolver section={section} />
      {isHeroSection(section.name) && <Breadcrumbs />}
    </Fragment>
  ));
};
