import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';

export const heroCourseLocalized = {
  'en-US': {
    linkLabel: 'Enroll',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON,
  },
  'ru': {
    linkLabel: 'Присоединиться',
    noLinkLabel: REGISTRATION_WILL_OPEN_SOON_RU,
  },
} as const;

export const courseStatus = {
  'en-US': {
    available: 'available',
    upcoming: 'upcoming',
    planned: 'planned',
  } as const,
  'ru': {
    available: 'доступен',
    upcoming: 'предстоящий',
    planned: 'запланирован',
  } as const,
};
