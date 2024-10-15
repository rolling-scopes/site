import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  YouTubeIcon,
} from '@/shared/icons';
import { SocialMediaProps } from '@/shared/ui/social-media-item';

export const communityGroups: SocialMediaProps[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/the-rolling-scopes-school/',
    icon: <LinkedInIcon />,
  },
  {
    title: 'Instagram RU',
    href: 'https://www.instagram.com/rsschool_news/',
    icon: <InstagramIcon />,
  },
  {
    title: 'Instagram EN',
    href: 'https://www.instagram.com/rsschool_en/',
    icon: <InstagramIcon />,
  },
  {
    title: 'YouTube RU',
    href: 'https://www.youtube.com/c/RollingScopesSchool',
    icon: <YouTubeIcon />,
  },
  {
    title: 'YouTube EN',
    href: 'https://www.youtube.com/c/RSschool',
    icon: <YouTubeIcon />,
  },
  {
    title: 'Telegram RU',
    href: 'https://t.me/AfishaRSSchool',
    icon: <TelegramIcon />,
  },
  {
    title: 'Facebook RU',
    href: 'https://www.facebook.com/RollingScopesSchool',
    icon: <FacebookIcon />,
  },
  {
    title: 'Facebook EN',
    href: 'https://www.facebook.com/rsschoolEN',
    icon: <FacebookIcon />,
  },
  {
    title: 'Facebook Group RU & EN',
    href: 'https://www.facebook.com/groups/TheRollingScopes',
    icon: <FacebookIcon />,
  },
];
