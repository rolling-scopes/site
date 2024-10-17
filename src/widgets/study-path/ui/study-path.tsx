import { createContext } from 'react';
import { Stages } from './stages';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import type { ListType } from '@/shared/types';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import type { DataMap } from 'data';

import './study-path.scss';

type PathNames = Exclude<keyof DataMap, 'courses'>;

interface StudyPathProps {
  path: PathNames;
  type?: ListType;
  lang?: 'ru' | 'en';
}

const localizedContent = {
  en: {
    title: 'Choose what you want to learn',
    paragraph:
      'A full-stack developer is someone who has expertise in both frontend (what users see) and backend (server and database) development. This dual skill set enables them to supervise and implement projects from start to finish. Businesses today prioritize hiring full-stack developers because they can efficiently bridge various technological aspects, resulting in faster product development.',
  },
  ru: {
    title: 'Выберите, чему вы хотите научиться',
    paragraph:
      'Full-stack разработчик — это человек, обладающий опытом как в области внешнего интерфейса (то, что видят пользователи), так и в области внутреннего интерфейса (сервера и базы данных). Этот двойной набор навыков позволяет им контролировать и реализовывать проекты от начала до конца. Сегодня компании отдают приоритет найму разработчиков полного стека, потому что они могут эффективно объединить различные технологические аспекты, что приводит к более быстрой разработке продукта.',
  },
};

export const LangContext = createContext<'ru' | 'en'>('en');

export const StudyPath = ({ path, type, lang = 'en' }: StudyPathProps) => {
  const { data: coursesPath } = useDataByName<PathNames>(path);

  const isAngularOrAwsDev = path === 'angular' || path === 'awsDev';

  const title = isAngularOrAwsDev ? 'Course Curriculum' : localizedContent[lang].title;

  const paragraph = isAngularOrAwsDev
    ? 'This program will have theory and practice on the following topic:'
    : localizedContent[lang].paragraph;

  return (
    <LangContext.Provider value={lang}>
      <section className="study-path container" id="learning-path">
        <div className="study-path content upd">
          <WidgetTitle size="small" mods="asterisk">{title}</WidgetTitle>
          <Paragraph>{paragraph}</Paragraph>
          <Stages stages={coursesPath} type={type} />
        </div>
      </section>
    </LangContext.Provider>
  );
};
