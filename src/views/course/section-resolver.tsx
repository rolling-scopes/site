import { Section } from '@/shared/types/types';
import { SECTION_TYPE } from '@/views/course/constants';
import { AboutCourseSection } from '@/widgets/about-course';
import { Hero } from '@/widgets/hero-page';
import { LearningPathStageItem, LearningPathStages } from '@/widgets/learning-path-stages';
import { MediaGrid } from '@/widgets/media-grid';
import { MediaTextBlock } from '@/widgets/media-text-block';
import { HighlightCard } from '@/widgets/principles/ui/principle-card/highlight-card';
import { Support } from '@/widgets/support';
import { UpcomingCourses } from '@/widgets/upcoming-courses';
import { VideoBlock } from '@/widgets/video-block';

type SectionResolverProps = {
  section: Section;
  courseEnrollUrl: string | null;
  embedded?: boolean;
};

export const SectionResolver = ({ courseEnrollUrl, section, embedded }: SectionResolverProps) => {
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
          embedded={embedded}
          title={section.data.title}
          titleSize={section.data.titleSize}
          contentLeft={section.data.contentLeft}
          contentRight={section.data.contentRight}
          contentBottom={section.data.contentBottom}
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

    case SECTION_TYPE.HERO:
      return (
        <Hero
          heading={section.data.heading}
          subHeading={section.data.subHeading}
          topHeading={section.data.topHeading}
          image={section.data.image}
        />
      );

    case SECTION_TYPE.UPCOMING_COURSES:
      return (
        <UpcomingCourses
          title={section.data.title}
          linkLabel={section.data.linkLabel}
          linkUrl={section.data.linkUrl}
          imageSrc={section.data.imageSrc}
        />
      );

    case SECTION_TYPE.DONATION:
      return (
        <Support
          title={section.data.title}
          imageSrc={section.data.imageSrc}
          content={section.data.content}
          linkLabelRight={section.data.linkLabelRight}
          linkLabelLeft={section.data.linkLabelLeft}
          linkUrlLeft={section.data.linkUrlLeft}
          linkUrlRight={section.data.linkUrlRight}
          linkIconLeft={section.data.linkIconLeft}
          linkIconRight={section.data.linkIconRight}
        />
      );

    case SECTION_TYPE.MEDIA_GRID:
      return (
        <MediaGrid
          title={section.data.title}
          description={section.data.description}
          media={section.data.media}
        />
      );

    case SECTION_TYPE.HIGHLIGHT_CARD:
      return (
        <HighlightCard
          heading={section.data.heading}
          content={section.data.content}
          icon={section.data.icon}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionName}`);
  }
};
