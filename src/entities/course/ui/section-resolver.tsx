import { courseStore } from '@/entities/course';
import { ApiCoursesIds, Section } from '@/entities/course/types';
import { AboutCourseSection } from '@/widgets/about-course/ui/about-course/about-course-section';
import { LearningPathStageItem } from '@/widgets/learning-path-stages/ui/learning-path-stage-item';
import { LearningPathStages } from '@/widgets/learning-path-stages/ui/learning-path-stages';
import { MediaTextBlock } from '@/widgets/media-text-block';
import { VideoBlock } from '@/widgets/video-block/ui/video-block';

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
          title={section.data.title}
          contentLeft={section.data.contentLeft}
          contentRight={section.data.contentRight}
          linkUrl={section.data.linkUrl ?? courseEnrollUrl}
          linkLabel={section.data.linkLabel}
          disabledLinkLabel={section.data.disabledLinkLabel}
          backgroundColor={section.data.backgroundColor}
        />
      );

    case 'learningPathStages':
      return (
        <LearningPathStages title={section.data.title} description={section.data.description}>
          {section.data.stages.map((stage, index) => (
            <LearningPathStageItem
              key={stage.id}
              index={index}
              title={stage.title}
              content={stage.content}
              image={stage.image}
            />
          ))}
        </LearningPathStages>
      );

    case 'videoBlock':
      return (
        <VideoBlock
          title={section.data.title}
          url={section.data.url}
          videoTitle={section.data.videoTitle}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionName}`);
  }
};
