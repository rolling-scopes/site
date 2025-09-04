import { OG_SITE_NAME, ROUTES } from '@/shared/constants';

export const communityMetadata = {
  title: `Community · ${OG_SITE_NAME}`,
  description:
    'Join the RS School international developer community: collaborate, learn, share experiences, attend events, and grow your tech career together!',
  keywords:
    'RS School community, developer community, programming community, events, collaboration, tech networking',
  canonical: `https://rs.school/${ROUTES.COMMUNITY}`,
  robots: {
    index: true,
    follow: true,
  },
};
