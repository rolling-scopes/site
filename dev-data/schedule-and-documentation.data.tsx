import { ReactElement } from 'react';

import { DOCUMENTATION_LINKS } from '@/shared/constants';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

interface ScheduleText {
  schedule: string;
  documentation: string;
  and: string;
  link: string;
}
const TEXT: Record<Language, ScheduleText> = {
  ru: {
    schedule: 'Расписание курса доступно - ',
    documentation: ', а документацию школы можно найти - ',
    link: 'здесь',
    and: 'и',
  },
  en: {
    schedule: 'The course schedule is available - ',
    documentation: ', and the school documentation can be found - ',
    link: 'here',
    and: 'and',
  },
};

export const scheduleDocumentationLinks = (
  language: Language, scheduleUrl: string[] | null,
): ReactElement => {
  const text = TEXT[language];
  const docLink = DOCUMENTATION_LINKS[language];

  const renderScheduleLinks = () => {
    return scheduleUrl?.map((link, index) => (
      <>
        <LinkCustom key={link} href={link} variant="textLink" external>
          {`${text.link}`}
        </LinkCustom>
        {index < scheduleUrl.length - 1 && ` ${text.and} `}
      </>
    ));
  };

  return (
    <Paragraph>
      {text.schedule}
      {' '}
      {renderScheduleLinks()}
      {text.documentation}
      <LinkCustom href={docLink} variant="textLink" external>
        {text.link}
      </LinkCustom>
    </Paragraph>
  );
};
