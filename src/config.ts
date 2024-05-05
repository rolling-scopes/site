// If RS_SCHOOL_HOST defined, then we are on rollingscopes.com
const isRollingScopesLanding = !!process.env.RS_SCHOOL_HOST;

export const config = {
  title: isRollingScopesLanding ? 'The Rolling Scopes' : 'The Rolling Scopes School',
  host: process.env.HOST ?? '',
  rsSchoolHost: process.env.RS_SCHOOL_HOST ?? '',
  isRollingScopesLanding,
};
