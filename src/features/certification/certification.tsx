import { Paragraph, Title } from '@/app/components';
import { CourseNames } from '@/data/communication.data';

import './certification.scss';

interface RequiredProps {
  courseName: CourseNames;
  lang?: 'ru' | 'en';
}

const localizedContent = {
  en: {
    title: 'Communication',
    firstParagraph:
      "To earn a course certificate, you must complete all assignments, finish the final project, and achieve at least 70% of the top student's score in the course. The certificate is a recognition of your hard work and dedication.",
    preSchoolParagraph: '',
  },
  ru: {
    title: 'Сертификат',
    firstParagraph:
      'Чтобы получить сертификат о прохождении подготовительного этапа вам необходимо набрать 70% от результата TOP1 студента. Например, если в конце этапа у лучшего студента 2000 баллов, проходной для всех студентов 1400 баллов (2000*0.7).',
    preSchoolParagraph:
      ' Наличие или отсутствие сертификата о прохождении подготовительного этапа не влияет на возможность дальнейшего обучения в RS School.',
  },
};

export const Certification = ({ courseName, lang = 'en' }: RequiredProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <Title text={localizedContent[lang].title} hasAsterisk />
        <Paragraph>{localizedContent[lang].firstParagraph}</Paragraph>
        {courseName === 'js / front-end pre-school ru' && (
          <Paragraph>{localizedContent[lang].preSchoolParagraph}</Paragraph>
        )}
      </article>
    </section>
  );
};
