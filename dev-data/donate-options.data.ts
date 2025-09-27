import boostyIcon from '@/shared/assets/svg/boosty-icon.svg';
import openCollectiveIcon from '@/shared/assets/svg/opencollective-icon.svg';
import { LINKS } from '@/shared/constants';

export const donateOptions = [
  {
    id: 1,
    buttonLinkLabel: 'Donate now',
    menuLinkLabel: 'Donate on Opencollective',
    icon: openCollectiveIcon,
    href: LINKS.DONATE_OPEN_COLLECTIVE,
  },
  {
    id: 2,
    buttonLinkLabel: 'Subscribe now',
    menuLinkLabel: 'Subscribe on Boosty',
    icon: boostyIcon,
    href: LINKS.DONATE_BOOSTY,
  },
];
