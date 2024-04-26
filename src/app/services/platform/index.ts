import { config } from '@/config';

export function buildUrl(path: string) {
  if (config.isRollingScopesLanding && path.includes('courses')) {
    return `${config.rsSchoolHost}${path}`;
  }
  return `${config.host}${path}`;
}
