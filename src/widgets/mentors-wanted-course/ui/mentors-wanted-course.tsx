import classNamesBind from 'classnames/bind';
import Image from 'next/image';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-wanted-course.module.scss';

const cx = classNamesBind.bind(styles);

type MentorsWantedCourseProps = {
  link: string;
};

export const MentorsWantedCourse = ({ link }: MentorsWantedCourseProps) => {
  return (
    <section className={cx('mentors-wanted', 'container')} data-testid="mentors-wanted">
      <article className={cx('mentors-wanted-content', 'content', 'column-2')}>
        <div className={cx('content-left')}>
          <WidgetTitle id="mentors-wanted" mods="lines">
            Mentors Wanted!
          </WidgetTitle>
          <Paragraph>
            If&nbsp;you are interested in mentoring our students, please go through the
            {' '}
            <LinkCustom href={link} external data-testid="link-custom">
              Mentoring Documentation
            </LinkCustom>
            {' '}
            for&nbsp;the course.
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
