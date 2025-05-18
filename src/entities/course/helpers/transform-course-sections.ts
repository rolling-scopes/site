import { isAboutCourseSection } from '@/entities/course/helpers/is-about-course-section';
import { isMediaTextBlockSection } from '@/entities/course/helpers/is-media-text-block-section';
import {
  transformAboutCourseSection,
} from '@/entities/course/helpers/transform-about-course-section';
import {
  transformMediaTextBlockSection,
} from '@/entities/course/helpers/transform-media-text-block-section';
import { ApiCoursePageResponseSections, Section } from '@/entities/course/types';

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

    throw new Error('Unable to determine section type.');
  });
}
