import classNames from 'classnames/bind';

import { PAGE_NAMES } from '@/shared/constants';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { MainTitle } from '@/shared/ui/main-title';
import { Subtitle } from '@/shared/ui/subtitle';
import { heroPageData, mentorsRegisterData } from 'data';

import styles from './mentorship-hero.module.scss';

export const cx = classNames.bind(styles);

type MentorshipHeroProps = {
  lang?: Language;
};

export type MentorshipHeroData = {
  mainTitle: string;
  subTitle: string[] | [];
};

export const MentorshipHero = ({ lang = 'en' }: MentorshipHeroProps) => {
  const { mainTitle, subTitle = [] }: MentorshipHeroData = heroPageData[PAGE_NAMES.MENTORSHIP];

  return (
    <section className={cx('hero', 'container')} data-testid="mentorship-hero">
      <div className={cx('hero-content', 'content')}>
        <article className={cx('hero-info')}>
          <Subtitle size="extra-small" weight="bold">
            {subTitle[0]}
          </Subtitle>
          <MainTitle className={cx('title-main')}>{mainTitle}</MainTitle>
          <LinkCustom
            href={mentorsRegisterData[lang].button.link}
            variant="primary"
            external={mentorsRegisterData[lang].button.external}
          >
            {mentorsRegisterData[lang].button.text}
          </LinkCustom>
        </article>
      </div>
    </section>
  );
};
