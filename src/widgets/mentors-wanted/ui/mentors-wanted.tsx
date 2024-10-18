import classNamesBind from 'classnames/bind';
import { LINKS } from '@/app/const';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-wanted.module.scss';

const cx = classNamesBind.bind(styles);

export const MentorsWanted = () => {
  return (
    <section className={cx('mentors-wanted', 'container')} data-testid="mentors-wanted">
      <article className={cx('mentors-wanted-content', 'content')}>
        <div className={cx('content-left')}>
          <WidgetTitle id="mentors-wanted" mods="lines">
            Mentors Wanted!
          </WidgetTitle>
          <Paragraph>
            If&nbsp;you are interested in mentoring our students, please go through the
            {' '}
            <LinkCustom href={LINKS.ANGULAR_MENTORING} external data-testid="link-custom">
              Mentoring Documentation
            </LinkCustom>
            {' '}
            for&nbsp;the Angular Course.
          </Paragraph>
        </div>
        <Image
          className={cx('sloth-mascot')}
          src={mentorImg}
          alt="Sloth - mascot dresses as a detective"
          data-testid="sloth-mascot"
        />
      </article>
    </section>
  );
};
