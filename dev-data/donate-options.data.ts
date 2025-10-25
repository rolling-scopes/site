import boostyIcon from '@/shared/assets/svg/boosty-icon.svg';
import openCollectiveIcon from '@/shared/assets/svg/opencollective-icon.svg';
import { LINKS } from '@/shared/constants';

export const donateOptions = {
  'en-US': [
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
  ],
  'ru': [
    {
      id: 1,
      buttonLinkLabel: 'Пожертвовать',
      menuLinkLabel: 'Пожертвовать на OpenCollective',
      icon: openCollectiveIcon,
      href: LINKS.DONATE_OPEN_COLLECTIVE,
    },
    {
      id: 2,
      buttonLinkLabel: 'Оформить подписку',
      menuLinkLabel: 'Оформить подписку на Boosty',
      icon: boostyIcon,
      href: LINKS.DONATE_BOOSTY,
    },
  ],
};

export const DONATION_DESCRIPTION_TRANSLATION_MAP = {
  'en-US': `Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Every donation, big or small, helps!

Thank you for your support!`,
  'ru': `Ваши пожертвования помогают нам оплачивать хостинг, домены, лицензии и рекламу курсов и мероприятий. Каждое пожертвование, большое или маленькое, имеет значение!

Спасибо за поддержку!`,
};
