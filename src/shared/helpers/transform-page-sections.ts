import { PageResponseSections, Section } from '@/shared/types/types';
import { isLink } from '@/shared/ui/link-custom/helpers/is-link';
import { transformLink } from '@/shared/ui/link-custom/helpers/transform-link';
import { isSlide } from '@/shared/ui/slider/helpers/is-slide';
import { isSlider } from '@/shared/ui/slider/helpers/is-slider';
import { transformSlide } from '@/shared/ui/slider/helpers/transform-slide';
import { transformSlider } from '@/shared/ui/slider/helpers/transform-slider';
import {
  isExternalEmbedContent,
  transformExternalEmbedContent,
} from '@/widgets/external-embed-content';
import {
  isFeatureGrid,
  isFeatureItem,
  transformFeatureGrid,
  transformFeatureItem,
} from '@/widgets/feature-grid';
import { isHeroSection, transformHeroSection } from '@/widgets/hero';
import { isHighlightCard, transformHighlightCard } from '@/widgets/highlight-card';
import { isInfoGridSection, transformInfoGridSection } from '@/widgets/info-grid';
import {
  isLearningPathStagesSection,
  transformLearningPathStages,
} from '@/widgets/learning-path-stages';
import { isMarqueeSection, transformMarqueeSection } from '@/widgets/marquee';
import { isMediaGridSection, transformMediaGridSection } from '@/widgets/media-grid';
import {
  isMediaTextBlockSection,
  transformMediaTextBlockSection,
} from '@/widgets/media-text-block';

export function transformPageSections(sections: PageResponseSections): Section[] {
  if (!sections) {
    throw new Error('Unable to determine list of sections.');
  }

  return sections.map((section) => {
    if (!section) {
      throw new Error('Unable to determine section.');
    }

    if (isFeatureGrid(section)) {
      return transformFeatureGrid(section);
    }

    if (isFeatureItem(section)) {
      return transformFeatureItem(section);
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

    throw new Error('Unable to determine section type.');
  });
}
