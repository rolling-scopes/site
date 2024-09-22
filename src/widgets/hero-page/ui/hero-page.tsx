import classNames from 'classnames/bind';
import { PageName } from '../types';
import { Image } from '@/shared/ui/image';
import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { heroPageData } from 'data';

import styles from './hero-page.module.scss';

export const cx = classNames.bind(styles);

export type HeroPageProps = {
  mainTitle: string;
  widgetTitle: string;
  subTitle: string[] | [];
  heroImageSrc: string;
  imageAltText: string;
};

type SubTitle = Pick<HeroPageProps, 'subTitle'>;

const HeroSubTitle = ({ subTitle }: SubTitle) => {
  if (!subTitle?.length) {
    return null;
  }

  return (
    <div className={cx('subtitle-container')}>
      {subTitle.map((item: string, index: number) => {
        return (
          <Subtitle key={index} fontSize="extra-small" color="black">
            {item}
          </Subtitle>
        );
      })}
    </div>
  );
};

export const HeroPage = ({ pageName }: PageName) => {
  const { mainTitle,
    widgetTitle,
    subTitle = [],
    heroImageSrc = '',
    imageAltText = '' }: HeroPageProps = heroPageData[pageName];

  const hasImage = !!heroImageSrc.length;
  const heroImageAltText = imageAltText.length ? imageAltText : '';

  return (
    <section id="hero-page" className={cx('hero-page', 'container')} data-testid="hero-page">
      <div className={cx('hero-page', 'content')}>
        <article className={cx('title-container')}>
          <HeroSubTitle subTitle={subTitle} />
          <MainTitle className={cx('title-main')}>{mainTitle}</MainTitle>
          <WidgetTitle size="small" className={cx('description-title')}>{widgetTitle}</WidgetTitle>
        </article>
        {hasImage && <Image className={cx('sloth-mascot')} src={heroImageSrc} alt={heroImageAltText} />}
      </div>
    </section>
  );
};
