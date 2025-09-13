import classNames from 'classnames/bind';

import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { HeroSectionData } from '@/widgets/hero/types';

import styles from './mentorship-hero.module.scss';

export const cx = classNames.bind(styles);

type MentorshipHeroProps = Omit<HeroSectionData, 'variant'>;

export const MentorshipHero = ({ heading, subHeading, topHeading, image }: MentorshipHeroProps) => {
  const topHeadingLabel = topHeading?.at(0);
  const background = image?.src ? `url(${image?.src}) center / cover no-repeat` : undefined;

  return (
    <section
      style={{ background }}
      className={cx('hero', 'container')}
      data-testid="mentorship-hero"
    >
      <div className={cx('hero-content', 'content')}>
        <article className={cx('hero-info')}>
          <Subtitle size="extra-small" weight="bold">
            {topHeadingLabel}
          </Subtitle>

          <MainTitle className={cx('title-main')}>{heading}</MainTitle>

          {subHeading}
        </article>
      </div>
    </section>
  );
};
