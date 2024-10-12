import classNames from 'classnames/bind';
import { ANCHORS, LINKS } from '@/app/const';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors.module.scss';

const cx = classNames.bind(styles);

export const Mentors = () => {
  return (
    <section className={cx('mentors-container', 'container')} id={ANCHORS.MENTORS_WANTED} data-testid="mentors-wanted">
      <div className={cx('mentors-content', 'content', 'column-2')}>
        <article className={cx('mentors-info')}>
          <WidgetTitle size="large" mods="lines">Mentors wanted!</WidgetTitle>
          <Paragraph fontSize="large">
            The Rolling Scopes School is constantly looking for mentors from all over the world to
            teach everyone who wants to learn the JavaScript language and the world of Front-end.
            Over the past few years, over 1500+ people have successfully completed our six month
            training program.
          </Paragraph>
          <LinkCustom
            href={LINKS.BECOME_MENTOR}
            variant="primary"
            external
          >
            Become a mentor
          </LinkCustom>
        </article>
        <Image
          className={cx('sloth-mascot')}
          src={mentorImg}
          alt="Sloth - mascot dresses as a detective"
          data-testid="sloth-mascot"
        />
      </div>
    </section>
  );
};
