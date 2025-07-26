import classNames from 'classnames/bind';

import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { AboutCourseSectionData } from '@/widgets/about-course';
import { GridItem } from '@/widgets/about-course/ui/grid-item/grid-item';

import styles from './about-course-section.module.scss';

export const cx = classNames.bind(styles);

type AboutCourseSectionProps = AboutCourseSectionData & {
  enrollUrl?: string;
};

export const AboutCourseSection = async ({
  enrollUrl,
  title,
  subTitle,
  gridItems,
  registrationClosedLinkText,
  registrationLinkText,
}: AboutCourseSectionProps) => {
  const linkText = enrollUrl ? registrationLinkText : registrationClosedLinkText;
  const enrollHref = enrollUrl ?? '';

  return (
    <section className={cx('container')}>
      <div className={cx('about-course', 'content')}>
        <WidgetTitle>{title}</WidgetTitle>
        {subTitle && <Paragraph>{subTitle}</Paragraph>}
        <div className={cx('about-course-grid')} data-testid="about-course-grid">
          {gridItems.map(({ id, heading, content, icon }) => (
            <GridItem
              key={id}
              id={id}
              heading={heading}
              content={content}
              icon={icon}
            />
          ))}
        </div>
        <LinkCustom href={enrollHref} variant="primary" external disabled={!enrollUrl}>
          {linkText}
        </LinkCustom>
      </div>
    </section>
  );
};
