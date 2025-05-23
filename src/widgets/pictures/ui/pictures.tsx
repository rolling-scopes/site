'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';

import { Paragraph } from '@/shared/ui/paragraph';
import { Slider } from '@/shared/ui/slider';
import { SocialMediaItem } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { picturesSocialMediaLinks, sliderPhotos } from 'data';

import styles from './pictures.module.scss';

const cx = classNames.bind(styles);

export const Pictures = () => {
  const slides = sliderPhotos.map(({ id, src, alt }) => (
    <div
      key={id}
      style={{
        display: 'block',
        width: '100%',
        aspectRatio: '8/5',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt={alt}
        data-testid="carousel-image"
        fill
      />
    </div>
  ));

  return (
    <section className={cx('container')}>
      <div className={cx('content')}>
        <WidgetTitle mods="asterisk">The Rolling Scopes in pictures</WidgetTitle>
        <Slider
          slides={slides}
          sliderProps={{
            navigation: true,
            loop: true,
            centeredSlides: true,
            keyboard: { enabled: true },
            speed: 1000,
            slidesPerView: 1.25,
            spaceBetween: 10,
            autoplay: {
              delay: 3000,
              pauseOnMouseEnter: true,
            },
          }}
        />
        <Paragraph>
          Want to see photos of our community? A vast collection of photographs from our events is
          available on our Facebook Albums and Instagram pages.
        </Paragraph>
        <div className={cx('social-media-container')}>
          {picturesSocialMediaLinks.map(({ title, href, icon }) => (
            <SocialMediaItem key={title} title={title} href={href} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
