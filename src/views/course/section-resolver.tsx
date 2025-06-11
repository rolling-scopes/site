import { SECTION_TYPE } from '@/views/course/constants';
import { Section } from '@/views/course/types';
import { AboutCourseSection } from '@/widgets/about-course';
import { LearningPathStageItem, LearningPathStages } from '@/widgets/learning-path-stages';
import { MediaTextBlock } from '@/widgets/media-text-block';
import { VideoBlock } from '@/widgets/video-block';

type SectionResolverProps = {
  section: Section;
  courseEnrollUrl: string | null;
};

export const SectionResolver = async ({ courseEnrollUrl, section }: SectionResolverProps) => {
  const sectionName = section.name;

  switch (sectionName) {
    case SECTION_TYPE.ABOUT_COURSE:
      return (
        <AboutCourseSection
          enrollUrl={courseEnrollUrl}
          title={section.data.title}
          gridItems={section.data.gridItems}
          registrationLinkText={section.data.registrationLinkText}
          registrationClosedLinkText={section.data.registrationClosedLinkText}
        />
      );

    case SECTION_TYPE.MEDIA_TEXT_BLOCK:
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

    case SECTION_TYPE.LEARNING_PATH_STAGES:
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

    case SECTION_TYPE.VIDEO_BLOCK:
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
