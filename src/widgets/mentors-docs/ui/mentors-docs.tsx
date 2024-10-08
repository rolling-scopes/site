import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseTitle } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNamesBind.bind(styles);

type MentorsDocsProps = {
  detailsUrl: string;
  courseTitle: '' | CourseTitle;
  lang?: 'en' | 'ru';
};

const textContent = {
  en: {
    header: 'Course Curriculum',
    textInfo: 'If you are interested in mentoring our students, please go through the',
    textLink: 'Mentoring Documentation',
    textAfterLink: 'for the',
    textEnd: 'Course.',
  },
  ru: {
    header: 'Учебная программа курса',
    textInfo: 'Если вы хотите стать ментором, пожалуйста, ознакомьтесь с ',
    textLink: 'Документацией школы',
    textAfterLink: 'для',
    textEnd: 'курса.',
  },
};

export const MentorsDocs = ({ detailsUrl, courseTitle, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('mentors-docs', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <WidgetTitle id="mentors-wanted" mods="lines">
            {textContent[lang].header}
          </WidgetTitle>
          <Paragraph>
            {textContent[lang].textInfo}
            {' '}
            <LinkCustom
              href={detailsUrl}
              external
            >
              {textContent[lang].textLink}
            </LinkCustom>
            {' '}
            {textContent[lang].textAfterLink}
            {' '}
            {courseTitle}
            {' '}
            {textContent[lang].textEnd}
          </Paragraph>
        </div>
        <div className={cx('picture')}>
          <Image src={mentorImg} alt="Sloth - mascot dresses as a detective" />
        </div>
      </article>
    </section>
  );
};
