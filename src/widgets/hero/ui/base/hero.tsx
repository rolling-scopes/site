import classNames from 'classnames/bind';
import Image from 'next/image';

import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { HeroSectionData } from '@/widgets/hero-course/types';

import styles from './hero.module.scss';

export const cx = classNames.bind(styles);

type HeroTopHeadingProps = Pick<HeroSectionData, 'topHeading'>;

type HeroSectionProps = Omit<HeroSectionData, 'variant'>;

const HeroTopHeading = ({ topHeading }: HeroTopHeadingProps) => {
  if (!topHeading?.length) {
    return null;
  }

  return (
    <div className={cx('subtitle-container')}>
      {topHeading.map((heading) => (
        <Subtitle key={heading} size="extra-small">
          {heading}
        </Subtitle>
      ))}
    </div>
  );
};

export const Hero = ({ heading, subHeading, topHeading, image }: HeroSectionProps) => {
  return (
    <section id="hero-page" className={cx('hero-page', 'container')} data-testid="hero-section">
      <div className={cx('hero-page-content', 'content')}>
        <article className={cx('title-container')}>
          <HeroTopHeading topHeading={topHeading} />

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
