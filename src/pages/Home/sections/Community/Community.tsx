import React from 'react';
import { Title, Subtitle, SocialMedia, TitleType } from '../../../../components';

import {
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  TelegramIcon,
  FacebookIcon
} from '../../../../icons';

import image from '../../../../assets/welcome.png';

import './Community.scss';

interface communityGroup {
  title: string;
  href: string;
  Icon: React.FC;
}

const communityGroups: communityGroup[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/the-rolling-scopes-school/',
    Icon: LinkedInIcon
  },
  {
    title: 'Instagram RU',
    href: 'https://www.instagram.com/rsschool_news/',
    Icon: InstagramIcon
  },
  {
    title: 'Instagram EN',
    href: 'https://www.instagram.com/rsschool_en/',
    Icon: InstagramIcon
  },
  {
    title: 'YouTube RU',
    href: 'https://www.youtube.com/c/RollingScopesSchool',
    Icon: YouTubeIcon
  },
  {
    title: 'YouTube EN',
    href: 'https://www.youtube.com/c/RSschool',
    Icon: YouTubeIcon
  },
  {
    title: 'Telegram RU',
    href: 'https://t.me/AfishaRSSchool',
    Icon: TelegramIcon
  },
  {
    title: 'Facebook RU',
    href: 'https://www.facebook.com/RollingScopesSchool',
    Icon: FacebookIcon
  },
  {
    title: 'Facebook EN',
    href: 'https://www.facebook.com/rsschoolEN',
    Icon: FacebookIcon
  },
  {
    title: 'Facebook Group RU & EN',
    href: 'https://www.facebook.com/groups/TheRollingScopes',
    Icon: FacebookIcon
  }
];

export const Community: React.FC = () => (
  <div id="community" className="community container">
    <div className="community content column-2">
      <div className="info">
        <Title text="Join RS Community" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="If you want to learn coding or be a RS School mentor, speaking at developers meetups and conferences or taking part in RS clubs welcome to the Rolling Scopes community! Join us in social networks to be in touch!" />
        <div className="social-media-container">
          {communityGroups.map((i) => (
            <SocialMedia {...i} key={i.title} />
          ))}
        </div>
      </div>
      <img className="right picture" src={image} alt="community-welcome" />
    </div>
  </div>
);
