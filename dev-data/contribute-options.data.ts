import { LINKS, ROUTES } from '@/shared/constants';

export const contributeOptions = [
  {
    id: 1,
    title: 'Mentorship',
    description:
      'Become a mentor and guide the next generation of developers. Sign up as a mentor here.',
    linkLabel: 'Register as a mentor',
    href: `/${ROUTES.MENTORSHIP}`,
  },
  {
    id: 2,
    title: 'Developer / Coordinator / Trainer',
    description:
      'Contribute your skills as a developer, coordinator, or trainer. Fill out this form to get started.',
    linkLabel: 'Become a contributor',
    href: LINKS.BECOME_CONTRIBUTOR,
  },
];
