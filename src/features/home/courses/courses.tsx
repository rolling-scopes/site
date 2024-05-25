import { ReactNode } from 'react';
import { LinkCustom } from '@/app/components';
import { ROUTES } from '@/app/const';
import { useWindowSize } from '@/app/hooks';
import { buildUrl } from '@/app/services/platform';
import { AngularIcon, AwsLogo, HtmlIcon, ReactIcon, RsBanner } from '@/icons';

import './courses.scss';

type CourseProps = {
  title: string;
  language: string;
  startDate: string;
  href: string;
  icon: ReactNode;
};

const courses: CourseProps[] = [
  {
    title: 'AWS Fundamentals',
    language: 'EN',
    startDate: 'April 15, 2024',
    href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`),
    icon: <AwsLogo />,
  },
  {
    title: 'AWS Cloud Developer',
    language: 'EN',
    startDate: 'May 28, 2024',
    href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`),
    icon: <AwsLogo />,
  },
  {
    title: 'JS / Front‑end. Pre‑school',
    language: 'RU',
    startDate: 'June 24, 2024',
    href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`),
    icon: <HtmlIcon />,
  },
  {
    title: 'React',
    language: 'EN',
    startDate: 'July 1, 2024',
    href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.REACT}`),
    icon: <ReactIcon />,
  },
  {
    title: 'Angular',
    language: 'EN',
    startDate: 'July 1, 2024',
    href: buildUrl(`/${ROUTES.COURSES}/${ROUTES.ANGULAR}`),
    icon: <AngularIcon />,
  },
];

export const Courses = () => {
  const size = useWindowSize();

  let linkText = 'More details';
  if (size.width <= 810) {
    linkText = '';
  } else if (size.width <= 1440) {
    linkText = 'More';
  }

  return (
    <div className="courses container">
      <div className="courses content">
        <div className="title">Upcoming courses</div>
        <div className="column-2">
          <div className="courses">
            {courses.map(({ title, language, startDate, href, icon }) => (
              <div key={title} className="course-card">
                <div className="icon-container">{icon}</div>
                <div className="course-info">
                  <div className="name">{title}</div>
                  <div className="date">{`${startDate} • ${language}`}</div>
                </div>
                <div className="details-container">
                  <LinkCustom href={href} size="small" invertIconColor={true}>
                    {linkText}
                  </LinkCustom>
                </div>
              </div>
            ))}
            <LinkCustom href="/courses">Go to courses </LinkCustom>
          </div>
          <div className="image">
            <RsBanner />
          </div>
        </div>
      </div>
    </div>
  );
};
