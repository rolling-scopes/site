import classNames from 'classnames/bind';

import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { COURSE_TITLES, CourseNamesKeys } from 'data';

import styles from './certification.module.scss';

type RequiredProps = {
  courseName: CourseNamesKeys;
};

const localizedContent = {
  default: {
    title: 'Certification',
    firstParagraph:
      "To earn a course certificate, you must complete all assignments, finish the final project, and achieve at least 70% of the top student's score in the course. The certificate is a recognition of your hard work and dedication.",
    secondParagraph: '',
  },
  [COURSE_TITLES.JS_RU]: {
    title: 'Сертификат',
    firstParagraph:
      'Чтобы получить сертификат о прохождении курса вам необходимо набрать 70% от результата TOP-1 студента. Сертификат является признанием вашего усердного труда и преданности делу.',
    secondParagraph: '',
  },
};

type LocalizedContentKey = keyof typeof localizedContent;

const cx = classNames.bind(styles);

export const Certification = ({ courseName }: RequiredProps) => {
  const { title, firstParagraph, secondParagraph } =
    courseName in localizedContent
      ? localizedContent[courseName as LocalizedContentKey]
      : localizedContent.default;

  return (
    <section className={cx('certification', 'container')}>
      <article className={cx('certification', 'content', 'info-wrapper')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('paragraphs-wrapper')}>
          <Paragraph>{firstParagraph}</Paragraph>
          {secondParagraph && <Paragraph>{secondParagraph}</Paragraph>}
        </div>
      </article>
    </section>
  );
};
