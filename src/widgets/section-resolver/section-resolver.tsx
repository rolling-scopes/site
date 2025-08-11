import { Marquee } from '../marquee';
import { courseStore } from '@/entities/course';
import { ROUTES } from '@/shared/constants';
import { Section } from '@/shared/types/types';
import { SocialMediaItem } from '@/shared/ui/social-media-item';
import { AboutCourseSection } from '@/widgets/about-course';
import { EXTERNAL_EMBED_CONTENT_TYPE, RSCourses } from '@/widgets/external-embed-content';
import { Hero } from '@/widgets/hero';
import { HighlightCard } from '@/widgets/highlight-card';
import { InfoCell, InfoGrid } from '@/widgets/info-grid';
import { LearningPathStageItem, LearningPathStages } from '@/widgets/learning-path-stages';
import { MediaGrid } from '@/widgets/media-grid';
import { MediaTextBlock } from '@/widgets/media-text-block';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import { Support } from '@/widgets/support';
import { UpcomingCourses } from '@/widgets/upcoming-courses';
import { VideoBlock } from '@/widgets/video-block';

type SectionResolverProps = {
  section: Section;
  courseEnrollUrl?: string;
  embedded?: boolean;
};

export const SectionResolver = async ({
  courseEnrollUrl,
  section,
  embedded,
}: SectionResolverProps) => {
  const sectionName = section.name;
  const courses = await courseStore.loadCourses();

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
          imageAbsolutePosition={section.data.imageAbsolutePosition}
          anchorId={section.data.anchorId}
          title={section.data.title}
          titleSize={section.data.titleSize}
          titleMod={section.data.titleMod}
          sectionLabel={section.data.sectionLabel}
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
              imageWidth={stage.imageWidth}
              imageHeight={stage.imageHeight}
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
      if (!courses) {
        throw new Error('No courses provided');
      }

      return (
        <UpcomingCourses
          courses={courses}
          title={section.data.title}
          linkLabel={section.data.linkLabel}
          linkUrl={section.data.linkUrl ?? ROUTES.COURSES}
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
          numberOfColumns={section.data.numberOfColumns}
          removeItemsOnResponsive={section.data.removeItemsOnResponsive}
          rowGapPx={section.data.rowGapPx}
        >
          {section.data.media}
        </MediaGrid>
      );

    case SECTION_TYPE.HIGHLIGHT_CARD:
      return (
        <HighlightCard
          heading={section.data.heading}
          content={section.data.content}
          icon={section.data.icon}
        />
      );

    case SECTION_TYPE.EXTERNAL_EMBED_CONTENT:
      if (!courses) {
        throw new Error('No courses provided');
      }

      if (EXTERNAL_EMBED_CONTENT_TYPE.ALL_COURSES) {
        return <RSCourses courses={courses} />;
      }

      throw new Error(`No component found for external embed content: ${sectionName}`);

    case SECTION_TYPE.INFO_GRID:
      return (
        <InfoGrid>
          {section.data.gridItems?.map((item) => (
            <InfoCell
              key={item.id}
              title={item.title ?? ''}
              description={item.content ?? ''}
              titleFontSize={section.data.size}
            />
          ))}
        </InfoGrid>
      );

    case SECTION_TYPE.MARQUEE:
      return <Marquee items={section.data.items} />;

    case SECTION_TYPE.SLIDER:
      return 'slider';

    case SECTION_TYPE.SOCIAL_LINK:
      return (
        <SocialMediaItem
          title={section.data.label}
          icon={
            section.data.icon ? <img src={section.data.icon.src} alt="" aria-hidden="true" /> : null
          }
          href={section.data.link ?? '/'}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionName}`);
  }
};
