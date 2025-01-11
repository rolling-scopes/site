import { Fragment } from 'react';
import classNames from 'classnames/bind';
import { DocDetail } from '../doc-detail';
import { Language } from '@/shared/types';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { OnboardLinks } from '@/widgets/mentors-docs/ui/onboard-links/onboard-links';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  mentorDocsLink?: string;
  courseDocsLink?: string;
  courseTitle?: CourseTitle;
  onboardLinks?: SocialMediaProps[];
  lang: Language;
};

export const MentorsDocs = ({
  mentorDocsLink,
  courseTitle,
  onboardLinks,
  lang = 'en',
}: MentorsDocsProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'docs-wrapper')}>
        <WidgetTitle mods="asterisk">{mentorDocsData[lang].header}</WidgetTitle>
        <div className={cx('docs')} aria-label="Documentation links">
          {courseTitle && (
            <Fragment>
              <DocDetail
                textBeforeLink={mentorDocsData[lang].mentor.textBeforeLink}
                textLink={mentorDocsData[lang].mentor.textLink}
                textAfterLink={`${mentorDocsData[lang].mentor.textAfterLink} ${courseTitle} ${mentorDocsData[lang].mentor.textAfterCourseName}`}
                linkDocs={mentorDocsLink}
              />
            </Fragment>
          )}
          {onboardLinks && (
            <OnboardLinks text={mentorDocsData[lang].additional} links={onboardLinks} />
          )}
          {onboardLinks && (
            <OnboardLinks links={onboardLinks} />
          )}
        </div>
      </article>
    </section>
  );
};
