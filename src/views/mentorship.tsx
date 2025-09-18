import { Section } from '@/shared/types/types';
import { SectionResolver } from '@/widgets/section-resolver';

type MentorshipProps = {
  sections: Section[];
};

export const Mentorship = async ({ sections }: MentorshipProps) => {
  return sections.map((section) => <SectionResolver key={section.id} section={section} />);
};
