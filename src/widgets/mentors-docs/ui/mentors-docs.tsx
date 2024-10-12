import classNames from 'classnames/bind';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  link: string;
  courseTitle: '' | CourseTitle;
  lang?: 'en' | 'ru';
};

export const MentorsDocs = ({ link, courseTitle, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('container', 'mentors-docs')}>
      <article className={cx('content', 'docs-wrapper')}>
        <div className={cx('docs')}>
          <WidgetTitle mods="asterisk">
            {mentorDocsData[lang].header}
          </WidgetTitle>
          <Paragraph>
            {mentorDocsData[lang].textInfo}
            {' '}
            <LinkCustom
              href={link}
              external
            >
              {mentorDocsData[lang].textLink}
            </LinkCustom>
            {' '}
            {mentorDocsData[lang].textAfterLink}
            {' '}
            {courseTitle}
            {' '}
            {mentorDocsData[lang].textEnd}
          </Paragraph>
        </div>
        <div className={cx('picture-wrapper')}>
          <Image src={mentorImg} alt={mentorDocsData[lang].pictureAlt} className={cx('picture')} />
        </div>
      </article>
    </section>
  );
};
