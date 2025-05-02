import { ROUTES } from '@/core/const';

/**
 * Build course URL path by extracting the course name from a full URL
 * and formatting it according to application routes
 *
 * @param url {string} - The full course URL
 * @returns {string} - The formatted course path
 * @example
 * // Assuming ROUTES.COURSES is "courses"
 * buildCourseUrl("https://rs.school/courses/aws-ai")
 * // Returns "/courses/aws-ai"
 */
export function buildCourseUrl(url: string) {
  const courseName = url.slice(url.lastIndexOf('/'));

  return `/${ROUTES.COURSES}${courseName}`;
}
