// requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Paragraph, SocialMedia, SocialMediaProps, Title } from '@/app/components';

import photo1 from '@/assets/photo-1.webp';
import photo2 from '@/assets/photo-2.webp';
import photo3 from '@/assets/photo-3.webp';
import photo4 from '@/assets/photo-4.webp';
import photo5 from '@/assets/photo-5.webp';
import photo6 from '@/assets/photo-6.webp';
import photo7 from '@/assets/photo-7.webp';
import photo8 from '@/assets/photo-8.webp';
import photo9 from '@/assets/photo-9.webp';
import { FacebookIcon, InstagramIcon } from '@/icons';
import Image from '@/shared/image';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './pictures.scss';

const socialMedia: SocialMediaProps[] = [
  {
    title: 'Albums',
    href: 'https://www.facebook.com/groups/186362068186532/media/albums',
    icon: <FacebookIcon />,
  },
  {
    title: 'The Rolling Scopes',
    href: 'https://www.instagram.com/rollingscopes/',
    icon: <InstagramIcon />,
  },
  {
    title: 'RS School EN',
    href: 'https://www.instagram.com/rsschool_en/',
    icon: <InstagramIcon />,
  },
  {
    title: 'RS School RU',
    href: 'https://www.instagram.com/rsschool_news',
    icon: <InstagramIcon />,
  },
];

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

export const Pictures = () => (
  <div className="pictures container">
    <div className="pictures content">
      <Title text="The Rolling Scopes in pictures" hasAsterisk />
      <Carousel
        className="carousel"
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}>
        {photos.map((photo) => (
          <Image src={photo} key={photo} data-testid="carousel-image" />
        ))}
      </Carousel>
      <Paragraph>
        Want to see photos of our community? A vast collection of photographs from our events is
        available on our Facebook Albums and Instagram pages.
      </Paragraph>
      <div className="social-media-container">
        {socialMedia.map(({ title, href, icon }) => (
          <SocialMedia key={title} title={title} href={href} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);
