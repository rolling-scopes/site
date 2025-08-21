import classNames from 'classnames/bind';
import Image from 'next/image';

import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { HeroSectionData } from '@/widgets/hero-course/types';

import styles from './hero.module.scss';

export const cx = classNames.bind(styles);

type SubTitleProps = Pick<HeroSectionData, 'subHeading'>;

const HeroSubTitle = ({ subHeading }: SubTitleProps) => {
  if (!subHeading?.length) {
    return null;
  }

  return (
    <div className={cx('subtitle-container')}>
      <Subtitle size="extra-small">{subHeading}</Subtitle>
    </div>
  );
};

export const Hero = ({ heading, subHeading, topHeading, image }: HeroSectionData) => {
  return (
    <section id="hero-page" className={cx('hero-page', 'container')} data-testid="hero-section">
      <div className={cx('hero-page-content', 'content')}>
        <article className={cx('title-container')}>
          <HeroSubTitle subHeading={topHeading ?? ''} />

          <MainTitle className={cx('title-main')}>{heading}</MainTitle>

          <WidgetTitle size="small" className={cx('description-title')}>
            {subHeading}
          </WidgetTitle>
        </article>

        {image?.src && (
          <Image
            className={cx('sloth-mascot')}
            src={image.src}
            height={image.height}
            width={image.width}
            data-testid="hero-image"
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
};
