import { COURSE_TITLES } from '@/../dev-data/courseTitles.data';
import { COURSE_SCHEDULE_LINKS, DOCUMENTATION_LINKS } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

export const scheduleDocumentationEN = (courseName: keyof typeof COURSE_SCHEDULE_LINKS) => (
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

export const scheduleDocumentationJS_PRESCHOOL_RU = () => (
  <Paragraph>
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS[COURSE_TITLES.JS_PRESCHOOL_RU]}
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

export const scheduleDocumentationJS_RU = () => (
  <Paragraph>
    Рассписания
    {' '}
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS[COURSE_TITLES.JS_RU][0]}
      variant="textLink"
      external
    >
      первого
    </LinkCustom>
    {' '}
    и
    {' '}
    <LinkCustom
      href={COURSE_SCHEDULE_LINKS[COURSE_TITLES.JS_RU][1]}
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
