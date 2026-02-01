'use client';

import { useParams } from 'next/navigation';

import { AboutList } from './about-list';
import { Course } from '@/entities/course';
import { ApiResourceLocale } from '@/shared/types';
import { CourseMenuItemsFresh } from '@/shared/ui/course-menu-items-fresh';
import { SchoolMenu } from '@/widgets/school-menu';
import { schoolMenuStaticLinks } from 'data';

type DesktopViewProps = {
  courses: Course[];
};

export const DesktopView = ({ courses }: DesktopViewProps) => {
  const params = useParams();
  const lang = params?.lang as ApiResourceLocale ?? 'en-US';
  const menuHeading = lang === 'en-US' ? 'all courses' : 'курсы';

  return (
    <div className="desktop-view" data-testid="desktop-view">
      <div className="left">
        <AboutList lang={lang} />
        <SchoolMenu heading="rs school" color="light" columns={1}>
          {schoolMenuStaticLinks[lang].map((link, i) => (
            <SchoolMenu.Item
              key={i}
              title={link.title}
              description={link.description}
              url={link.detailsUrl}
              color="light"
            />
          ))}
        </SchoolMenu>
      </div>

      <div className="right">
        <SchoolMenu heading={menuHeading} color="light" columns={2}>
          <CourseMenuItemsFresh courses={courses} lang={lang} color="light" icon="iconFooter" />
        </SchoolMenu>
      </div>
    </div>
  );
};
