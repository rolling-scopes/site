import { Fragment } from 'react';

import { Section } from '@/shared/types/types';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { SectionResolver } from '@/widgets/section-resolver';

type HomeProps = {
  sections: Section[];
};

export const Home = ({ sections }: HomeProps) => {
  return sections.map((section) => (
    <Fragment key={section.id}>
      <SectionResolver section={section} />
      {isHeroSection(section.name) && <Breadcrumbs />}
    </Fragment>
  ));
};
