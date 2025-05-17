import { Section } from '@/entities/course/types';
import { AboutCourseSection } from '@/widgets/about-course/ui/about-course/about-course-section';
import { CertificationSection } from '@/widgets/certification/ui/certification-section';
import { CommunicationSection } from '@/widgets/communication/ui/communication-section';
import { TrainingProgramSection } from '@/widgets/training-program/ui/training-program-section';
import { CourseNamesKeys } from 'data';

type SectionResolverProps = {
  section: Section;
  courseName: CourseNamesKeys;
};

export const SectionResolver = ({ courseName, section }: SectionResolverProps) => {
  const sectionId = section.id;

  switch (sectionId) {
    case 'trainingProgram':
      return (
        <TrainingProgramSection
          courseName={courseName}
          title={section.data.title}
          content={section.data.content}
          image={section.data.image}
          registrationLinkText={section.data.registrationLinkText}
          registrationClosedLinkText={section.data.registrationClosedLinkText}
        />
      );

    case 'aboutCourse':
      return (
        <AboutCourseSection
          courseName={courseName}
          title={section.data.title}
          gridItems={section.data.gridItems}
          registrationLinkText={section.data.registrationLinkText}
          registrationClosedLinkText={section.data.registrationClosedLinkText}
        />
      );

    case 'certification':
      return <CertificationSection title={section.data.title} content={section.data.content} />;

    case 'communication':
      return (
        <CommunicationSection
          title={section.data.title}
          content={section.data.content}
          image={section.data.image}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionId}`);
  }
};
