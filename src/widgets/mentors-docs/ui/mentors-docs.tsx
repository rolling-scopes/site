import classNames from 'classnames/bind';
import { DocDetail } from './doc-detail';
import { DocLinks } from './doc-links';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Image } from '@/shared/ui/image';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  mentorDocsLink: string;
  courseDocsLink: string;
  socialLinks: SocialMediaProps[];
  courseTitle?: CourseTitle;
  lang?: 'en' | 'ru';
};

export const MentorsDocs = ({ mentorDocsLink, courseDocsLink, socialLinks, courseTitle, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'docs-wrapper')}>
        <div className={cx('docs')} aria-label="Documentation links">
          <WidgetTitle mods="asterisk">
            {mentorDocsData[lang].header}
          </WidgetTitle>
          <DocDetail
            courseTitle={courseTitle}
            textInfo={mentorDocsData[lang].mentor.textInfo}
            textLink={mentorDocsData[lang].mentor.textLink}
            textAfterLink={mentorDocsData[lang].mentor.textAfterLink}
            textEnd={mentorDocsData[lang].mentor.textEnd}
            linkDocs={mentorDocsLink}
          />
          <DocDetail
            courseTitle={courseTitle}
            textInfo={mentorDocsData[lang].course.textInfo}
            textLink={mentorDocsData[lang].course.textLink}
            textAfterLink={mentorDocsData[lang].course.textAfterLink}
            textEnd={mentorDocsData[lang].course.textEnd}
            linkDocs={courseDocsLink}
          />
          {socialLinks.length > 0
          && <DocLinks text={mentorDocsData[lang].additional} links={socialLinks} />}
        </div>
        <div className={cx('picture-wrapper')}>
          <Image src={mentorImg} alt={mentorDocsData[lang].pictureAlt} className={cx('picture')} />
        </div>
      </article>
    </section>
  );
};
