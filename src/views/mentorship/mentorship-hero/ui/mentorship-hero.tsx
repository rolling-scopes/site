import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import { PAGE_NAMES } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { heroPageData, mentorsRegisterData } from 'data';

import styles from './mentorship-hero.module.scss';

export const cx = classNames.bind(styles);

export type MentorshipHeroProps = {
  mainTitle: string;
  widgetTitle: string;
  subTitle: string[] | [];
  heroImageSrc?: StaticImageData;
  imageAltText: string;
};

type SubTitleProps = Pick<MentorshipHeroProps, 'subTitle'>;

const HeroSubTitle = ({ subTitle }: SubTitleProps) => {
  if (!subTitle?.length) {
    return null;
  }

  return (
    <div className={cx('subtitle-container')}>
      {subTitle.map((item: string, index: number) => {
        return (
          <Subtitle key={index} fontSize="extra-small" weight="bold" color="black">
            {item}
          </Subtitle>
        );
      })}
    </div>
  );
};

export const MentorshipHero = () => {
  const {
    mainTitle,
    subTitle = [],
    heroImageSrc,
    imageAltText = '',
  }: MentorshipHeroProps = heroPageData[PAGE_NAMES.MENTORSHIP];

  return (
    <section
      id="hero-page"
      className={cx('hero-page', 'container', 'hero-page-mentorship')}
      data-testid="hero-page"
    >
      <div className={cx('hero-page-content', 'content')}>
        <article className={cx('title-container', 'hero-page-mentorship-container')}>
          <HeroSubTitle subTitle={subTitle} />
          <MainTitle className={cx('title-main')}>{mainTitle}</MainTitle>
          <LinkCustom
            href={mentorsRegisterData['en'].button.link}
            variant="primary"
            external={mentorsRegisterData['en'].button.external}
          >
            {mentorsRegisterData['en'].button.text}
          </LinkCustom>
        </article>
        {heroImageSrc?.src && (
          <Image
            className={cx('sloth-mascot')}
            src={heroImageSrc}
            alt={imageAltText}
            data-testid="sloth-mascot"
          />
        )}
      </div>
    </section>
  );
};
