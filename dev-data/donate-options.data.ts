import { LINKS } from '@/core/const';
import { BoostyIcon, OpenCollectiveIcon } from '@/shared/icons';

export const donateOptions = [
  {
    id: 1,
    linkLabel: 'Donate now',
    icon: 'openCollective',
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
  {
    id: 2,
    linkLabel: 'Subscribe now',
    icon: 'boosty',
    href: LINKS.DONATE_BOOSTY,
  },
];

export const donateOptionsForNavMenu = [
  {
    id: 1,
    linkLabel: 'Subscribe on Boosty',
    icon: BoostyIcon({
      width: 32,
      height: 32,
    }),
    href: LINKS.DONATE_BOOSTY,
  },
  {
    id: 2,
    linkLabel: 'Donate on Opencollective',
    icon: OpenCollectiveIcon({
      width: 32,
      height: 32,
    }),
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
];
