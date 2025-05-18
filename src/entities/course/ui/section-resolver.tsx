import { courseStore } from '@/entities/course';
import { ApiCoursesIds, Section } from '@/entities/course/types';
import { AboutCourseSection } from '@/widgets/about-course/ui/about-course/about-course-section';
import { MediaTextBlock } from '@/widgets/media-text-block';

type SectionResolverProps = {
  section: Section;
  courseId: ApiCoursesIds;
};

export const SectionResolver = async ({ courseId, section }: SectionResolverProps) => {
  const course = await courseStore.loadCourse(courseId);

  const sectionName = section.name;
  const courseEnrollUrl = course.enroll;

  switch (sectionName) {
    case 'aboutCourse':
      return (
        <AboutCourseSection
          enrollUrl={courseEnrollUrl}
          title={section.data.title}
          gridItems={section.data.gridItems}
          registrationLinkText={section.data.registrationLinkText}
          registrationClosedLinkText={section.data.registrationClosedLinkText}
        />
      );

    case 'mediaTextBlock':
      return (
        <MediaTextBlock
          enrollUrl={courseEnrollUrl}
          title={section.data.title}
          content={section.data.content}
          image={section.data.image}
          isImageOnLeft={section.data.isImageOnLeft}
          registrationLinkText={section.data.registrationLinkText}
          registrationClosedLinkText={section.data.registrationClosedLinkText}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionName}`);
  }
};
