'use client';

import { createContext } from 'react';
import { Stages } from './stages';
import { ROUTES } from '@/core/const';
import { dataProviders } from '@/core/services/api';
import type { Language, ListType } from '@/shared/types';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { type DataMap, MentorActivities, MentorshipDefaultRouteKeys } from 'data';

import './member-activity.scss';

type PathNames = Exclude<keyof DataMap, 'courses'> | MentorshipDefaultRouteKeys;

interface StudyPathProps {
  path: PathNames;
  activities?: MentorActivities[];
  type?: ListType;
  lang?: Language;
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

const mentorsActivityData = {
  en: {
    header: 'Mentor activities',
    info: 'The main tasks of a mentor for the duration of the course, but if you are willing to give students more - the list is not limited to anything',
  },
  ru: {
    header: 'Деятельность ментора',
    info: 'Основные задачи ментора на период курса, но если вы готовы дать студентам больше - список не ограничен ни чем',
  },
};

export const LangContext = createContext<Language>('en');

export const MemberActivity = ({ path, type, activities, lang = 'en' }: StudyPathProps) => {
  let coursesPath = dataProviders[path];

  const isAngularOrAwsDev = path === 'angular' || path === 'awsDev';

  let title = isAngularOrAwsDev ? 'Course Curriculum' : localizedContent[lang].title;

  if (path === ROUTES.MENTORSHIP && activities) {
    title = mentorsActivityData[lang].header;
    coursesPath = activities;
  }

  return (
    <LangContext.Provider value={lang}>
      <section className="study-path container" id="learning-path">
        <div className="study-path content upd">
          <WidgetTitle size="small" mods="asterisk">
            {title}
          </WidgetTitle>
          <Stages stages={coursesPath} type={type} />
        </div>
      </section>
    </LangContext.Provider>
  );
};
