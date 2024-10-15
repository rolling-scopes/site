import classNames from 'classnames/bind';
import { Additional } from './additional';
import { DocDetail } from './doc-detail';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Image } from '@/shared/ui/image';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  linkMentorDocs: string;
  linkCourseDocs: string;
  linkTelegram: string;
  linkDiscord: string;
  courseTitle: '' | CourseTitle;
  lang?: 'en' | 'ru';
};

export const MentorsDocs = ({ linkMentorDocs, linkCourseDocs, linkTelegram, linkDiscord, courseTitle, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('container', 'mentors-docs')}>
      <article className={cx('content', 'docs-wrapper')}>
        <div className={cx('docs')}>
          <WidgetTitle className={cx('title')} mods="asterisk">
            {mentorDocsData[lang].header}
          </WidgetTitle>
          <DocDetail
            courseTitle={courseTitle}
            textInfo={mentorDocsData[lang].mentor.textInfo}
            textLink={mentorDocsData[lang].mentor.textLink}
            textAfterLink={mentorDocsData[lang].mentor.textAfterLink}
            textEnd={mentorDocsData[lang].mentor.textEnd}
            linkDocs={linkMentorDocs}
          />
          <DocDetail
            courseTitle={courseTitle}
            textInfo={mentorDocsData[lang].course.textInfo}
            textLink={mentorDocsData[lang].course.textLink}
            textAfterLink={mentorDocsData[lang].course.textAfterLink}
            textEnd={mentorDocsData[lang].course.textEnd}
            linkDocs={linkCourseDocs}
          />
          <Additional
            text={mentorDocsData[lang].additional}
            linkTelegram={linkTelegram}
            linkDiscord={linkDiscord}
          />
        </div>
        <div className={cx('picture-wrapper')}>
          <Image src={mentorImg} alt={mentorDocsData[lang].pictureAlt} className={cx('picture')} />
        </div>
      </article>
    </section>
  );
};
