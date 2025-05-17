import { isAboutCourseSection } from '@/entities/course/helpers/is-about-course-section';
import { isTrainingProgramSection } from '@/entities/course/helpers/is-training-program-section';
import {
  transformAboutCourseSection,
} from '@/entities/course/helpers/transform-about-course-section';
import {
  transformTrainingProgramSection,
} from '@/entities/course/helpers/transform-training-program-section';
import { CoursePageResponse, Section } from '@/entities/course/types';
import {
  TypeAboutCourseWithoutUnresolvableLinksResponse,
  TypeTrainingProgramWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';

type Entries = (
  | TypeTrainingProgramWithoutUnresolvableLinksResponse
  | TypeAboutCourseWithoutUnresolvableLinksResponse
)[];

export function transformCourseSections(coursesResponse: CoursePageResponse): Section[] {
  const coursePageSections = (coursesResponse.includes?.Entry as Entries) ?? [];
  const assets = coursesResponse.includes?.Asset;

  return coursePageSections.map((section): Section => {
    if (isTrainingProgramSection(section)) {
      return transformTrainingProgramSection(assets, section);
    }

    if (isAboutCourseSection(section)) {
      return transformAboutCourseSection(assets, section);
    }

    throw new Error('Unable to determine section type.');
  });
}
