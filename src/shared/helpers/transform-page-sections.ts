import { Section } from '@/shared/types/types';
import { ApiCoursePageResponseSections } from '@/views/course/types';
import { isAboutCourseSection, transformAboutCourseSection } from '@/widgets/about-course';
import { isHeroSection } from '@/widgets/hero-page/helpers/is-hero-section';
import { transformHeroSection } from '@/widgets/hero-page/helpers/transform-hero-section';
import {
  isLearningPathStagesSection,
  transformLearningPathStages,
} from '@/widgets/learning-path-stages';
import { isMediaGridSection } from '@/widgets/media-grid/helpers/is-media-grid-section';
import {
  transformMediaGridSection,
} from '@/widgets/media-grid/helpers/transform-media-grid-section';
import {
  isMediaTextBlockSection,
  transformMediaTextBlockSection,
} from '@/widgets/media-text-block';
import { isHighlightCard } from '@/widgets/principles/helpers/is-highlight-card';
import { transformHighlightCard } from '@/widgets/principles/helpers/transform-highlight-card';
import { isDonationSection } from '@/widgets/support/helpers/is-donation-section';
import { transformDonationSection } from '@/widgets/support/helpers/transform-donation-section';
import {
  isUpcomingCoursesSection,
} from '@/widgets/upcoming-courses/helpers/is-upcoming-courses-section';
import {
  transformUpcomingCoursesSection,
} from '@/widgets/upcoming-courses/helpers/transform-upcoming-courses-section';
import { isVideoBlockSection, transformVideoBlockSection } from '@/widgets/video-block';

export function transformPageSections(sections: ApiCoursePageResponseSections): Section[] {
  if (!sections) {
    throw new Error('Unable to determine list of sections.');
  }

  return sections.map((section) => {
    if (!section) {
      throw new Error('Unable to determine section.');
    }

    if (isAboutCourseSection(section)) {
      return transformAboutCourseSection(section);
    }

    if (isMediaTextBlockSection(section)) {
      return transformMediaTextBlockSection(section);
    }

    if (isLearningPathStagesSection(section)) {
      return transformLearningPathStages(section);
    }

    if (isVideoBlockSection(section)) {
      return transformVideoBlockSection(section);
    }

    if (isHeroSection(section)) {
      return transformHeroSection(section);
    }

    if (isUpcomingCoursesSection(section)) {
      return transformUpcomingCoursesSection(section);
    }

    if (isDonationSection(section)) {
      return transformDonationSection(section);
    }

    if (isMediaGridSection(section)) {
      return transformMediaGridSection(section);
    }

    if (isHighlightCard(section)) {
      return transformHighlightCard(section);
    }

    throw new Error('Unable to determine section type.');
  });
}
