import classNames from 'classnames/bind';
import Image from 'next/image';
import { ANCHORS, ROUTES } from '@/core/const';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, MentorshipRoute, mentorsWantedData } from 'data';

import styles from './mentors-wanted.module.scss';

const cx = classNames.bind(styles);

type MentorsWantedProps = {
  route?: MentorshipRoute;
  courseName?: CourseNamesKeys;
};

export const MentorsWanted = async ({
  route = `/${ROUTES.MENTORSHIP}`,
  courseName,
}: MentorsWantedProps) => {
  const course = courseName ? await selectCourse(courseName) : null;
  const language = course ? course.language : 'en';

  return (
    <section
      className={cx('mentors-container', 'container')}
      id={ANCHORS.MENTORS_WANTED}
      data-testid="mentors-wanted"
    >
      <div className={cx('mentors-content', 'content', 'column-2')}>
        <article className={cx('mentors-info')}>
          <WidgetTitle size="large" mods="lines">
            Mentors wanted!
          </WidgetTitle>
          <Paragraph fontSize="large">{mentorsWantedData[language].info}</Paragraph>
          <LinkCustom href={route} variant="primary">
            {mentorsWantedData[language].button}
          </LinkCustom>
        </article>
        <Image
          className={cx('sloth-mascot')}
          src={mentorImg}
          alt="Sloth - mascot dressed as a detective"
          data-testid="sloth-mascot"
        />
      </div>
    </section>
  );
};
