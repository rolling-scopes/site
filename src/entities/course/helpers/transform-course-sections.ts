import { COURSE_PAGE_SECTIONS_TRANSFORM_MAP } from '@/entities/course/constants';
import { CoursePageResponse, Section } from '@/entities/course/types';
import { TypeTrainingProgramWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

type Entries = TypeTrainingProgramWithoutUnresolvableLinksResponse[];

export function transformCourseSections(coursesResponse: CoursePageResponse): Section[] {
  const coursePageSections = (coursesResponse.includes?.Entry as Entries) ?? [];
  const assets = coursesResponse.includes?.Asset;

  return coursePageSections.map((section): Section => {
    const sectionId = section.sys.contentType.sys.id;
    const transformFunction = COURSE_PAGE_SECTIONS_TRANSFORM_MAP.get(sectionId);

    if (!transformFunction) {
      throw new Error('Error mapping transform function.');
    }

    return transformFunction(assets, section);
  });
}
