import { isAboutCourseSection } from '@/entities/course/helpers/is-about-course-section';
import { isCertificationSection } from '@/entities/course/helpers/is-certification-section';
import { isCommunicationSection } from '@/entities/course/helpers/is-communicatio-section';
import { isTrainingProgramSection } from '@/entities/course/helpers/is-training-program-section';
import {
  transformAboutCourseSection,
} from '@/entities/course/helpers/transform-about-course-section';
import {
  transformCertificationSection,
} from '@/entities/course/helpers/transform-certification-section';
import {
  transformCommunicationSection,
} from '@/entities/course/helpers/transform-communication-section';
import {
  transformTrainingProgramSection,
} from '@/entities/course/helpers/transform-training-program-section';
import { CoursePageResponse, Section } from '@/entities/course/types';

export function transformCourseSections(coursesResponse: CoursePageResponse['items']): Section[] {
  // TODO: handle multiple course pages
  const sections = coursesResponse.at(0)?.fields.sections;

  if (!sections) {
    throw new Error('Unable to determine list of sections.');
  }

  return sections.map((section) => {
    if (!section) {
      throw new Error('Unable to determine section.');
    }

    if (isTrainingProgramSection(section)) {
      return transformTrainingProgramSection(section);
    }

    if (isAboutCourseSection(section)) {
      return transformAboutCourseSection(section);
    }

    if (isCertificationSection(section)) {
      return transformCertificationSection(section);
    }

    if (isCommunicationSection(section)) {
      return transformCommunicationSection(section);
    }

    throw new Error('Unable to determine section type.');
  });
}
