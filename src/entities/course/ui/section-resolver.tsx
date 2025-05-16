import { COURSE_PAGE_CONTENT_MAP } from '@/entities/course/constants';
import { Section } from '@/entities/course/types';
import { CourseNamesKeys } from 'data';

type SectionResolverProps = {
  section: Section;
  courseName: CourseNamesKeys;
};

export const SectionResolver = ({ courseName, section }: SectionResolverProps) => {
  const sectionId = section.id;
  const SectionComponent = COURSE_PAGE_CONTENT_MAP.get(sectionId);

  if (!SectionComponent) {
    throw new Error(`No component found for section type: ${sectionId}`);
  }

  return <SectionComponent courseName={courseName} sectionData={section.data} />;
};
