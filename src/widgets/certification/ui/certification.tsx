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
  [COURSE_TITLES.JS_EN]: {
    title: 'Сертификат',
    firstParagraph:
      "To earn a course certificate, you must complete all assignments and the final project, achieving a score that demonstrates a confident understanding of the material. The threshold is typically around 70% of the top student's score in the course.",
    secondParagraph:
      'A higher percentage reflects a deeper understanding. The certificate recognizes your knowledge and dedication.',
  },
  [COURSE_TITLES.JS_RU]: {
    title: 'Сертификат',
    firstParagraph:
      'Чтобы получить сертификат о прохождении курса вам необходимо набрать 70% от результата TOP-1 студента. Сертификат является признанием вашего усердного труда и преданности делу.',
    secondParagraph: '',
  },
  [COURSE_TITLES.JS_PRESCHOOL_RU]: {
    title: 'Сертификат',
    firstParagraph:
      'Чтобы получить сертификат о прохождении подготовительного этапа вам необходимо набрать 70% от результата TOP-1 студента. Например, если в конце этапа у лучшего студента 1000 баллов, проходной для всех студентов 700 баллов (1000 * 0.7).',
    secondParagraph:
      ' Наличие или отсутствие сертификата о прохождении подготовительного этапа не влияет на возможность дальнейшего обучения в RS School.',
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
