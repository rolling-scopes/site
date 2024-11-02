import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { DocDetail } from '../doc-detail';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { Language } from '@/shared/types.ts';
import { Image } from '@/shared/ui/image';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { OnboardLinks } from '@/widgets/mentors-docs/ui/onboard-links/onboard-links.tsx';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  mentorDocsLink?: string;
  courseDocsLink?: string;
  courseTitle?: CourseTitle;
  onboardLinks?: SocialMediaProps[];
  lang?: Language;
};

export const MentorsDocs = ({ mentorDocsLink, courseDocsLink, courseTitle, onboardLinks, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'docs-wrapper')}>
        <div className={cx('docs')} aria-label="Documentation links">
          <WidgetTitle mods="asterisk">
            {mentorDocsData[lang].header}
          </WidgetTitle>
          {courseTitle
          && (
            <Fragment>
              <DocDetail
                textBeforeLink={mentorDocsData[lang].mentor.textBeforeLink}
                textLink={mentorDocsData[lang].mentor.textLink}
                textAfterLink={`${mentorDocsData[lang].mentor.textAfterLink} ${courseTitle} ${mentorDocsData[lang].mentor.textAfterCourseName}`}
                linkDocs={mentorDocsLink}
              />
              <DocDetail
                textBeforeLink={mentorDocsData[lang].course.textBeforeLink}
                textLink={mentorDocsData[lang].course.textLink}
                textAfterLink={`${mentorDocsData[lang].course.textAfterLink} ${courseTitle} ${mentorDocsData[lang].course.textAfterCourseName}`}
                linkDocs={courseDocsLink}
              />
            </Fragment>
          )}
          {onboardLinks
          && <OnboardLinks text={mentorDocsData[lang].additional} links={onboardLinks} />}
        </div>
        <div className={cx('picture-wrapper')}>
          <Image src={mentorImg} alt={mentorDocsData[lang].pictureAlt} className={cx('picture')} loading="lazy" />
        </div>
      </article>
    </section>
  );
};
