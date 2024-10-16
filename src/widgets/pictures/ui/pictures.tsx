'use client';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '@/shared/assets/photo-1.webp';
import photo2 from '@/shared/assets/photo-2.webp';
import photo3 from '@/shared/assets/photo-3.webp';
import photo4 from '@/shared/assets/photo-4.webp';
import photo5 from '@/shared/assets/photo-5.webp';
import photo6 from '@/shared/assets/photo-6.webp';
import photo7 from '@/shared/assets/photo-7.webp';
import photo8 from '@/shared/assets/photo-8.webp';
import photo9 from '@/shared/assets/photo-9.webp';
import { FacebookIcon, InstagramIcon } from '@/shared/icons';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SocialMedia, SocialMediaProps } from '@/shared/ui/social-media';
import { WidgetTitle } from '@/shared/ui/widget-title';

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
  <section className="container">
    <div className="content">
      <WidgetTitle mods="asterisk">The Rolling Scopes in pictures</WidgetTitle>
      <Carousel
        className="carousel"
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        emulateTouch={true}
        autoPlay={true}
        transitionTime={1000}
        useKeyboardArrows={true}
        infiniteLoop={true}
        renderIndicator={(onClickHandler, isSelected, index) => (
          <li
            className={isSelected ? 'dot selected' : 'dot'}
            onClick={isSelected ? undefined : onClickHandler}
            value={index}
            key={index}
            tabIndex={0}
          />
        )}
      >
        {photos.map((photo, index) => (
          <Image
            img={photo}
            key={index}
            data-testid="carousel-image"
            alt="Photo of our community"
          />
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
  </section>
);
