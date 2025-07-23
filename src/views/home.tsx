import { ROUTES } from '@/shared/constants';
import { Section } from '@/shared/types/types';
import { SectionResolver } from '@/views/course/section-resolver';

type HomeProps = {
  sections: Section[];
};

export const Home = ({ sections }: HomeProps) => {
  return sections.map((section) => (
    <SectionResolver key={section.id} courseEnrollUrl={ROUTES.COURSES} section={section} />
  ));
};
