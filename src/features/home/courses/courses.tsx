import { ReactNode } from 'react';
import { Button } from '@/app/components';
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

  let buttonText = 'More details';
  if (size.width <= 810) {
    buttonText = '';
  } else if (size.width <= 1440) {
    buttonText = 'More';
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
                  <a className="details" href={href} target="_blank" rel="noreferrer">
                    {buttonText && <span className="label">{buttonText}</span>}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
            <Button label="Go to RS School " href="https://rs.school/" />
          </div>
          <div className="image">
            <RsBanner />
          </div>
        </div>
      </div>
    </div>
  );
};
