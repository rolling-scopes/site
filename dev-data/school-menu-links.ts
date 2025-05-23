import { ANCHORS, ROUTES } from '@/shared/constants';

export const schoolMenuStaticLinks = [
  {
    title: 'About RS School',
    detailsUrl: `/#${ANCHORS.ABOUT_SCHOOL}`,
    description: 'Free online education',
  },
  {
    title: 'Upcoming courses',
    detailsUrl: `/#${ANCHORS.UPCOMING_COURSES}`,
    description: 'Schedule your study',
  },
];

export const communityMenuStaticLinks = [
  {
    title: 'About',
    detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.ABOUT_COMMUNITY}`,
    description: 'Who we are',
  },
  {
    title: 'Events',
    detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.EVENTS}`,
    description: 'Meet us at events',
  },
  {
    title: 'Merch',
    detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.MERCH}`,
    description: 'Sloths for your daily life',
  },
  {
    title: 'Contribute',
    detailsUrl: `/${ROUTES.COMMUNITY}/#${ANCHORS.CONTRIBUTE}`,
    description: 'Assist us and improve yourself',
  },
];
