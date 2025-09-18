import { ROUTES } from '@/shared/constants';

/**
 * Build course URL path by extracting the course name from a full URL
 * and formatting it according to application routes
 *
 * @param url {string} - The full course URL
 * @param isMentorship {boolean} - Should treat the course as mentorship
 * @returns {string} - The formatted course path
 * @example
 * // Assuming ROUTES.COURSES is "courses"
 * buildCourseUrl("https://rs.school/courses/aws-ai")
 * // Returns "/courses/aws-ai"
 */
export function buildCourseUrl(url: string, isMentorship: boolean) {
  const courseName = url.slice(url.lastIndexOf('/'));

  if (isMentorship) {
    return `/${ROUTES.MENTORSHIP}${courseName}`;
  }

  return `/${ROUTES.COURSES}${courseName}`;
}
