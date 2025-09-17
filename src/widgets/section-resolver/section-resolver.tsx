import { Marquee } from '../marquee';
import { courseStore } from '@/entities/course';
import { MentorFeedbackCard } from '@/entities/mentor';
import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { Section } from '@/shared/types/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { LINK_TYPE } from '@/shared/ui/link-custom/constants';
import { Slider } from '@/shared/ui/slider';
import { communitySliderOptions, mentorshipSliderOptions } from '@/shared/ui/slider/constants';
import { SocialMediaLink } from '@/shared/ui/social-media-link';
import { AboutCourseSection } from '@/widgets/about-course';
import { ActivityCard } from '@/widgets/about-course/ui/activity-card/activity-card';
import { GridItem } from '@/widgets/about-course/ui/grid-item/grid-item';
import {
  EXTERNAL_EMBED_CONTENT_TYPE,
  MentorTalksVideoPlaylistWithPlayer,
  MentorshipCourses,
  RSCourses,
} from '@/widgets/external-embed-content';
import { Hero, MentorshipHero } from '@/widgets/hero';
import { HighlightCard } from '@/widgets/highlight-card';
import { InfoCell, InfoGrid } from '@/widgets/info-grid';
import { LearningPathStageItem, LearningPathStages } from '@/widgets/learning-path-stages';
import { MediaGrid } from '@/widgets/media-grid';
import { MediaTextBlock } from '@/widgets/media-text-block';
import {
  isSectionComponentsList,
} from '@/widgets/media-text-block/helpers/is-section-components-list';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import { UpcomingCourses } from '@/widgets/upcoming-courses';
import { VideoBlock } from '@/widgets/video-block';
import { rsSchoolIntroUrl } from '@/widgets/video-block/constants';

type SectionResolverProps = {
  section: Section;
  courseEnrollUrl?: string;
  embedded?: boolean;
  inline?: boolean;
};

export const SectionResolver = async ({
  courseEnrollUrl,
  section,
  embedded,
  inline,
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

    case SECTION_TYPE.ABOUT_COURSE_ITEM:
      if (section.data.variant === 'mentorship') {
        return (
          <ActivityCard
            title={section.data.heading}
            description={section.data.content}
            icon={section.data.icon}
          />
        );
      }

      return (
        <GridItem
          heading={section.data.heading}
          content={section.data.content}
          icon={section.data.icon}
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
          backgroundColor={section.data.backgroundColor}
          width={section.data.width}
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

    case SECTION_TYPE.HERO:
      if (section.data.variant === 'mentorship') {
        return (
          <MentorshipHero
            heading={section.data.heading}
            subHeading={section.data.subHeading}
            topHeading={section.data.topHeading}
            image={section.data.image}
          />
        );
      }

      return (
        <Hero
          heading={section.data.heading}
          subHeading={section.data.subHeading}
          topHeading={section.data.topHeading}
          image={section.data.image}
        />
      );

    case SECTION_TYPE.MEDIA_GRID:
      return (
        <MediaGrid
          numberOfColumns={section.data.numberOfColumns}
          removeItemsOnResponsive={section.data.removeItemsOnResponsive}
          rowGapPx={section.data.rowGapPx}
          colGapPx={section.data.colGapPx}
          fitContent={section.data.fitContent}
          settings={section.data.settings}
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

      if (section.data.type === EXTERNAL_EMBED_CONTENT_TYPE.ALL_COURSES) {
        return <RSCourses courses={courses} />;
      }

      if (section.data.type === EXTERNAL_EMBED_CONTENT_TYPE.MENTOR_TALKS_YOUTUBE_PLAYER) {
        return <MentorTalksVideoPlaylistWithPlayer />;
      }

      if (section.data.type === EXTERNAL_EMBED_CONTENT_TYPE.MENTORSHIP_COURSES) {
        return <MentorshipCourses courses={courses} />;
      }

      if (section.data.type === EXTERNAL_EMBED_CONTENT_TYPE.VIDEO_BLOCK) {
        return <VideoBlock url={rsSchoolIntroUrl} />;
      }

      if (section.data.type === EXTERNAL_EMBED_CONTENT_TYPE.UPCOMING_COURSES) {
        return (
          <UpcomingCourses
            courses={courses}
          />
        );
      }

      throw new Error(`No component found for external embed content: ${sectionName}`);

    case SECTION_TYPE.INFO_GRID:
      return (
        <InfoGrid borderColor={section.data.borderColor}>
          {section.data.gridItems?.map((item) => (
            <InfoCell
              key={item.id}
              title={item.title ?? ''}
              description={item.content ?? ''}
              titleFontSize={section.data.titleFontSize}
              size={section.data.size}
              gap={section.data.withGap ? 'withGap' : undefined}
            />
          ))}
        </InfoGrid>
      );

    case SECTION_TYPE.MARQUEE:
      return <Marquee items={section.data.items} />;

    case SECTION_TYPE.SLIDER: {
      const sliderOptions = isSectionComponentsList(section.data.slides)
        ? mentorshipSliderOptions
        : communitySliderOptions;

      return <Slider slides={section.data.slides} sliderProps={sliderOptions} />;
    }

    case SECTION_TYPE.LINK: {
      const isCourseRegistration = section.data.type === LINK_TYPE.COURSE_REGISTRATION;

      if (section.data.variant === 'social') {
        return (
          <SocialMediaLink
            inline={inline}
            title={section.data.label}
            icon={section.data.iconLeft ?? section.data.iconRight}
            href={section.data.link}
          />
        );
      }

      return (
        <LinkCustom
          external={isCourseRegistration ? true : isExternalUri(section.data.link)}
          variant={section.data.variant}
          disabledLabel={section.data.disabledLabel}
          href={isCourseRegistration ? courseEnrollUrl : section.data.link}
          iconLeft={section.data.iconLeft}
          iconRight={section.data.iconRight}
        >
          {section.data.label}
        </LinkCustom>
      );
    }

    case SECTION_TYPE.SLIDE:
      return (
        <MentorFeedbackCard
          name={section.data.title}
          course={section.data.subTitle}
          review={section.data.content ?? []}
          photo={section.data.icon}
        />
      );

    default:
      throw new Error(`No component found for section type: ${sectionName}`);
  }
};
