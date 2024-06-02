import classNames from 'classnames/bind';
import { Paragraph } from '@/app/components';
import { CourseNames } from '@/data/communication.data';
import { Title } from '@/shared/title';

import styles from './certification.module.scss';

interface RequiredProps {
  courseName: CourseNames;
}

const localizedContent = {
  default: {
    title: 'Certification',
    firstParagraph:
      "To earn a course certificate, you must complete all assignments, finish the final project, and achieve at least 70% of the top student's score in the course. The certificate is a recognition of your hard work and dedication.",
    secondParagraph: '',
  },
  'js / front-end ru': {
    title: 'Сертификат',
    firstParagraph:
      'Чтобы получить сертификат о прохождении курса вам необходимо набрать 70% от результата TOP-1 студента. Сертификат является признанием вашего усердного труда и преданности делу.',
    secondParagraph: '',
  },
  'js / front-end pre-school ru': {
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
        <Title text={title} hasAsterisk />
        <div className={cx('paragraphs-wrapper')}>
          <Paragraph>{firstParagraph}</Paragraph>
          {secondParagraph && <Paragraph>{secondParagraph}</Paragraph>}
        </div>
      </article>
    </section>
  );
};
