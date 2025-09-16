import { PageResponseSections, Section } from '@/shared/types/types';
import { isLink } from '@/shared/ui/link-custom/helpers/is-link';
import { transformLink } from '@/shared/ui/link-custom/helpers/transform-link';
import { isSlide } from '@/shared/ui/slider/helpers/is-slide';
import { isSlider } from '@/shared/ui/slider/helpers/is-slider';
import { transformSlide } from '@/shared/ui/slider/helpers/transform-slide';
import { transformSlider } from '@/shared/ui/slider/helpers/transform-slider';
import { isAboutCourseSection, transformAboutCourseSection } from '@/widgets/about-course';
import { isAboutCourseItem } from '@/widgets/about-course/helpers/is-about-course-item';
import {
  transformAboutCourseItem,
} from '@/widgets/about-course/helpers/transform-about-course-item';
import {
  isExternalEmbedContent,
  transformExternalEmbedContent,
} from '@/widgets/external-embed-content';
import { isHeroSection } from '@/widgets/hero/helpers/is-hero-section';
import { transformHeroSection } from '@/widgets/hero/helpers/transform-hero-section';
import { isHighlightCard } from '@/widgets/highlight-card/helpers/is-highlight-card';
import { transformHighlightCard } from '@/widgets/highlight-card/helpers/transform-highlight-card';
import { isInfoGridSection, transformInfoGridSection } from '@/widgets/info-grid';
import {
  isLearningPathStagesSection,
  transformLearningPathStages,
} from '@/widgets/learning-path-stages';
import { isMarqueeSection, transformMarqueeSection } from '@/widgets/marquee';
import { isMediaGridSection } from '@/widgets/media-grid/helpers/is-media-grid-section';
import {
  transformMediaGridSection,
} from '@/widgets/media-grid/helpers/transform-media-grid-section';
import {
  isMediaTextBlockSection,
  transformMediaTextBlockSection,
} from '@/widgets/media-text-block';
import { isDonationSection } from '@/widgets/support/helpers/is-donation-section';
import { transformDonationSection } from '@/widgets/support/helpers/transform-donation-section';
import {
  isUpcomingCoursesSection,
} from '@/widgets/upcoming-courses/helpers/is-upcoming-courses-section';
import {
  transformUpcomingCoursesSection,
} from '@/widgets/upcoming-courses/helpers/transform-upcoming-courses-section';

export function transformPageSections(sections: PageResponseSections): Section[] {
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

    if (isAboutCourseItem(section)) {
      return transformAboutCourseItem(section);
    }

    if (isMediaTextBlockSection(section)) {
      return transformMediaTextBlockSection(section);
    }

    if (isLearningPathStagesSection(section)) {
      return transformLearningPathStages(section);
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

    if (isExternalEmbedContent(section)) {
      return transformExternalEmbedContent(section);
    }

    if (isInfoGridSection(section)) {
      return transformInfoGridSection(section);
    }

    if (isMarqueeSection(section)) {
      return transformMarqueeSection(section);
    }

    if (isSlider(section)) {
      return transformSlider(section);
    }

    if (isSlide(section)) {
      return transformSlide(section);
    }

    if (isLink(section)) {
      return transformLink(section);
    }

    console.log(section.sys.contentType.sys.id);

    throw new Error('Unable to determine section type.');
  });
}
