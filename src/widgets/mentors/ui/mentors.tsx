import classNames from 'classnames/bind';
import { LINKS } from '@/app/const';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors.module.scss';

const cx = classNames.bind(styles);

export const Mentors = () => {
  return (
    <section className={cx('container', 'mentors-container')} id="mentors-wanted">
      <div className={cx('content', 'column-2', 'mentors-content')}>
        <div className={cx('mentors-info')}>
          <WidgetTitle size="large" mods="lines">Mentors wanted!</WidgetTitle>
          <Paragraph fontSize="large" className={cx('paragraph')}>
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
        </div>
        <div className={cx('picture')}>
          <Image src={mentorImg} alt="Sloth - mascot dressed as a detective" />
        </div>
      </div>
    </section>
  );
};
