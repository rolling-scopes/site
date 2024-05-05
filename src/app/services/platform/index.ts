import { config } from '@/config';

export function buildUrl(path: string) {
  if (config.isRollingScopesLanding) {
    /**
     * If we are on rollingscopes.com, redirect courses pages to rs.school
     */
    if (path.includes('courses')) {
      return `${config.rsSchoolHost}${path}`;
    }
    return `${config.host}${path}`;
  } else {
    /**
     * If we are on rs.school, we inject /community to all paths except / and /courses/*
     */
    if (!path.includes('courses') && path !== '/') {
      return `${config.host}/community${path}`;
    }
  }
  return `${config.host}${path}`;
}
