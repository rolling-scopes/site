import { route } from '@/app/const';
import { config } from '@/config';

export function buildUrl(path: string) {
  const isCoursePath = path.includes(route.COURSES);
  const isHomePath = path === route.HOME;

  if (config.isRollingScopesLanding) {
    /**
     * If we are on rollingscopes.com, redirect courses pages to rs.school
     */
    if (isCoursePath) {
      return `${config.rsSchoolHost}${path}`;
    }
    return `${config.host}${path}`;
  } else {
    /**
     * If we are on rs.school, we inject /community to all paths except / and /courses/*
     */
    if (!isCoursePath && !isHomePath) {
      return `${config.host}/${route.COMMUNITY}${path}`;
    }
  }
  return `${config.host}${path}`;
}
