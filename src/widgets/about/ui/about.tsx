import { InfoGrid } from './info-grid/info-grid';
import type { Course } from '@/entities/course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMapAbout } from 'data';

import './about.scss';

type AboutProps = {
  courseName: CourseNamesKeys;
  type?: 'ru' | 'en' | 'Pre-school RU';
  course: Course;
};

const localizedContent = {
  en: {
    title: 'About the course',
    linkLabel: 'Become a student',
    paragraph: '',
  },
  ru: {
    title: 'О курсе',
    linkLabel: 'Cтать студентом',
    paragraph: '',
  },
  'Pre-school RU': {
    title: 'JS/Frontend-разработка. Подготовительный этап',
    linkLabel: 'Стать студентом',
    paragraph:
      'Подготовительный этап поможет тем, кто мало знаком или совсем не знаком с программированием и хотел бы впоследствии учиться на основном курсе «JavaScript/Front-end».',
  },
};

export const About = ({ courseName, type = 'en', course }: AboutProps) => {
  const infoList = contentMapAbout[courseName];

  return (
    <section className="course-about container">
      <div className="course-about content">
        <WidgetTitle>{localizedContent[type].title}</WidgetTitle>
        {localizedContent[type].paragraph && (
          <Paragraph>{localizedContent[type].paragraph}</Paragraph>
        )}
        <InfoGrid items={infoList} hasTitle />
        <LinkCustom href={course?.enroll} variant="primary" external>
          {localizedContent[type].linkLabel}
        </LinkCustom>
      </div>
    </section>
  );
};
