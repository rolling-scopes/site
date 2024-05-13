import { ROUTES } from '@/app/const';
import { config } from '@/config';

export function buildUrl(path: string) {
  const isCoursePath = path.includes(ROUTES.COURSES);
  const isHomePath = path === ROUTES.HOME;

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
      return `${config.host}/${ROUTES.COMMUNITY}${path}`;
    }
  }
  return `${config.host}${path}`;
}
