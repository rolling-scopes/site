import { ReactNode } from 'react';
import { JsFrontendIcon, NodeJsIcon, RSLogo } from '@/icons';
import { useWindowSize } from '@/app/hooks';
import { Button } from '@/app/components';
import './Courses.scss';

type CourseProps = {
  title: string;
  language: string;
  startDate: string;
  href: string;
  icon: ReactNode;
};

const courses: CourseProps[] = [
  {
    title: 'Node.js',
    language: 'EN',
    startDate: 'June 12, 2023',
    href: 'https://rs.school/nodejs/',
    icon: <NodeJsIcon />
  },
  {
    title: 'JS / Front-end. Stage 0',
    language: 'RU',
    startDate: 'June 26, 2023',
    href: 'https://rs.school/js-stage0/',
    icon: <JsFrontendIcon />
  },
  {
    title: 'JS / Front-end',
    language: 'EN',
    startDate: 'November 6, 2023',
    href: 'https://rs.school/js-en/',
    icon: <JsFrontendIcon />
  }
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
                  <div className="name">
                    {title} ({language})
                  </div>
                  <div className="date">Start date: {startDate}</div>
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
            <RSLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
