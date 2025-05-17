import { getCoursesLogo } from './get-courses-logo';
import { getCoursesSchedule } from './get-courses-schedule';
import type { CourseData } from '../types/types';

function normalizeUrl(url: string | null): string {
  if (!url) {
    return '';
  }
  return url
    .toLowerCase()
    .replace(/(https?:\/\/)?(www\.)?/, '')
    .replace(/\/$/, '');
}

export async function getCombinedDataCourses(): Promise<CourseData[]> {
  try {
    const [coursesWithLogos, coursesWithDates] = await Promise.all([
      getCoursesLogo(),
      getCoursesSchedule(),
    ]);

    return coursesWithLogos
      .map((courseLogo) => {
        const matchedCourse = coursesWithDates.find((courseDate) => {
          const logoUrl = normalizeUrl(courseLogo.url);
          const dateUrl = normalizeUrl(courseDate.descriptionUrl);

          return dateUrl && logoUrl && dateUrl === logoUrl;
        });

        return {
          normalizeName: courseLogo.normalizeName,
          name: courseLogo.name,
          logo: courseLogo.logo,
          startDate: matchedCourse?.startDate || 'TBD',
          url: courseLogo.url,
        };
      })
      .filter((course) => course.logo.src);
  } catch (error) {
    console.error('Error fetching combined courses:', error);
    return [];
  }
}
