import { ReactElement } from 'react';

import { COURSE_TITLES } from '@/../dev-data/courseTitles.data';
import { COURSE_SCHEDULE_LINKS, DOCUMENTATION_LINKS } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

type CourseKeys = keyof typeof COURSE_TITLES;
type CourseNames = typeof COURSE_TITLES[CourseKeys];

type ScheduleDocumentationMapType = {
  [key in CourseNames]: ReactElement;
};

const scheduleDocumentationEN: (courseName: CourseKeys) => ReactElement = (courseName) => (
  <Paragraph>
    The course
    {' '}
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS[courseName]?.toString()}
      variant="textLink"
      external
    >
      shcedule
    </LinkCustom>
    {' '}
    and school
    {' '}
    <LinkCustom
      href={DOCUMENTATION_LINKS.EN}
      variant="textLink"
      external
    >
      documentation
    </LinkCustom>
    .
  </Paragraph>
);

const JS_PRESCHOOL_RU: ReactElement = (
  <Paragraph>
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS['JS_PRESCHOOL_RU']}
      variant="textLink"
      external
    >
      Рассписание
    </LinkCustom>
    {' '}
    курса и
    {' '}
    <LinkCustom
      href={DOCUMENTATION_LINKS.RU}
      variant="textLink"
      external
    >
      документация
    </LinkCustom>
    {' '}
    школы.
  </Paragraph>
);

const JS_RU: ReactElement = (
  <Paragraph>
    Рассписания
    {' '}
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS['JS_RU'][0]}
      variant="textLink"
      external
    >
      первого
    </LinkCustom>
    {' '}
    и
    {' '}
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS['JS_RU'][1]}
      variant="textLink"
      external
    >
      второго
    </LinkCustom>
    {' '}
    этапа курса и
    {' '}
    <LinkCustom
      href={DOCUMENTATION_LINKS.RU}
      variant="textLink"
      external
    >
      документация
    </LinkCustom>
    {' '}
    школы.
  </Paragraph>
);

export const scheduleDocumentationMap: ScheduleDocumentationMapType = {
  [COURSE_TITLES.JS_RU]: JS_RU,
  [COURSE_TITLES.JS_EN]: scheduleDocumentationEN('JS_EN'),
  [COURSE_TITLES.JS_PRESCHOOL_RU]: JS_PRESCHOOL_RU,
  [COURSE_TITLES.REACT]: scheduleDocumentationEN('REACT'),
  [COURSE_TITLES.ANGULAR]: scheduleDocumentationEN('ANGULAR'),
  [COURSE_TITLES.NODE]: scheduleDocumentationEN('NODE'),
  [COURSE_TITLES.AWS_FUNDAMENTALS]: scheduleDocumentationEN('AWS_FUNDAMENTALS'),
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: scheduleDocumentationEN('AWS_CLOUD_DEVELOPER'),
  [COURSE_TITLES.AWS_DEVOPS]: scheduleDocumentationEN('AWS_DEVOPS'),
};
