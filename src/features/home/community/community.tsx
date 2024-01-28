import { Title, Subtitle, SocialMedia, TitleType, type SocialMediaProps } from '@/app/components';

import { InstagramIcon, LinkedInIcon, YouTubeIcon, TelegramIcon, FacebookIcon } from '@/icons';

import image from '@/assets/welcome.png';

import './community.scss';

const communityGroups: SocialMediaProps[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/the-rolling-scopes-school/',
    icon: <LinkedInIcon />
  },
  {
    title: 'Instagram RU',
    href: 'https://www.instagram.com/rsschool_news/',
    icon: <InstagramIcon />
  },
  {
    title: 'Instagram EN',
    href: 'https://www.instagram.com/rsschool_en/',
    icon: <InstagramIcon />
  },
  {
    title: 'YouTube RU',
    href: 'https://www.youtube.com/c/RollingScopesSchool',
    icon: <YouTubeIcon />
  },
  {
    title: 'YouTube EN',
    href: 'https://www.youtube.com/c/RSschool',
    icon: <YouTubeIcon />
  },
  {
    title: 'Telegram RU',
    href: 'https://t.me/AfishaRSSchool',
    icon: <TelegramIcon />
  },
  {
    title: 'Facebook RU',
    href: 'https://www.facebook.com/RollingScopesSchool',
    icon: <FacebookIcon />
  },
  {
    title: 'Facebook EN',
    href: 'https://www.facebook.com/rsschoolEN',
    icon: <FacebookIcon />
  },
  {
    title: 'Facebook Group RU & EN',
    href: 'https://www.facebook.com/groups/TheRollingScopes',
    icon: <FacebookIcon />
  }
];

export const Community = () => (
  <div id="community" className="community container">
    <div className="community content column-2">
      <div className="info">
        <Title text="Join RS Community" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="If you want to learn coding or be a RS School mentor, speaking at developers meetups and conferences or taking part in RS clubs welcome to the Rolling Scopes community! Join us in social networks to be in touch!" />
        <div className="social-media-container">
          {communityGroups.map(({ title, href, icon }) => (
            <SocialMedia key={title} title={title} href={href} icon={icon} />
          ))}
        </div>
      </div>
      <img className="right picture" src={image} alt="community-welcome" />
    </div>
  </div>
);
