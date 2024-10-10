import classNames from 'classnames/bind';
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SocialMediaItem } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { picturesSocialMediaLinks, sliderPhotos } from 'data';

import styles from './pictures.module.scss';

const cx = classNames.bind(styles);

export const Pictures = () => (
  <section className={cx('container')}>
    <div className={cx('content')}>
      <WidgetTitle mods="asterisk">The Rolling Scopes in pictures</WidgetTitle>
      <Carousel
        className={cx('carousel')}
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
            className={cx('dot', { selected: isSelected })}
            onClick={onClickHandler}
            value={index}
            key={index}
            tabIndex={0}
          />
        )}
      >
        {sliderPhotos.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} data-testid="carousel-image" />
        ))}
      </Carousel>
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
