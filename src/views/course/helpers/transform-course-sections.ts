import { ApiCoursePageResponseSections, Section } from '@/views/course/types';
import { isAboutCourseSection, transformAboutCourseSection } from '@/widgets/about-course';
import {
  isLearningPathStagesSection,
  transformLearningPathStages,
} from '@/widgets/learning-path-stages';
import {
  isMediaTextBlockSection,
  transformMediaTextBlockSection,
} from '@/widgets/media-text-block';
import { isVideoBlockSection, transformVideoBlockSection } from '@/widgets/video-block';

export function transformCourseSections(sections: ApiCoursePageResponseSections): Section[] {
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

    throw new Error('Unable to determine section type.');
  });
}
