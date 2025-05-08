import { LINKS } from '@/shared/constants';
import boostyIconMenu from '@/shared/assets/svg/boosty-icon-menu.svg';
import openCollective from '@/shared/assets/svg/opencollective-icon.svg';
import { BoostyIcon, OpenCollectiveIcon } from '@/shared/icons';

export const donateOptions = [
  {
    id: 1,
    linkLabel: 'Donate now',
    icon: OpenCollectiveIcon,
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
  {
    id: 2,
    linkLabel: 'Subscribe now',
    icon: BoostyIcon,
    href: LINKS.DONATE_BOOSTY,
  },
];

export const donateOptionsForNavMenu = [
  {
    id: 1,
    linkLabel: 'Subscribe on Boosty',
    icon: boostyIconMenu,
    href: LINKS.DONATE_BOOSTY,
  },
  {
    id: 2,
    linkLabel: 'Donate on Opencollective',
    icon: openCollective,
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
];
