import boostyIconMenu from '@/shared/assets/svg/boosty-icon.svg';
import openCollective from '@/shared/assets/svg/opencollective-icon.svg';
import { LINKS } from '@/shared/constants';
import { BoostyIcon, OpenCollectiveIcon } from '@/shared/icons';

export const donateOptions = [
  {
    id: 1,
    buttonLinkLabel: 'Donate now',
    menuLinkLabel: 'Donate on Opencollective',
    buttonIcon: OpenCollectiveIcon,
    menuIcon: openCollective,
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
  {
    id: 2,
    buttonLinkLabel: 'Subscribe now',
    menuLinkLabel: 'Subscribe on Boosty',
    buttonIcon: BoostyIcon,
    menuIcon: boostyIconMenu,
    href: LINKS.DONATE_BOOSTY,
  },
];
