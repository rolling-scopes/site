import { Paragraph, Title } from '../../../../components';
import { pathCoursesList } from '../coursesData';

import './StudyPath.scss';

const StudyPath = () => {
  return (
    <section className="study-path container">
      <div className="study-path content">
        <Title text="Choose what you want to learn" hasAsterisk />
        <Paragraph>
          A full-stack developer is someone who has expertise in both frontend (what users see) and
          backend (server and database) development. This dual skill set enables them to supervise
          and implement projects from start to finish. Businesses today prioritize hiring full-stack
          developers because they can efficiently bridge various technological aspects, resulting in
          faster product development.
        </Paragraph>
        <div className="stages">
          {pathCoursesList.map(({ id, title, description, logoIcon, links }) => (
            <div key={id} className="stage">
              <div className="stage-step">
                <span className="stage-number">{id}</span>
                <div className="stage-line" />
              </div>
              <div className="stage-info">
                <h2 className="stage-title">{title}</h2>
                <p className="stage-description">{description}</p>
                <p className="stage-links">
                  {links.map(({ href, linkTitle, isActive = true }) => (
                    <a
                      href={href}
                      key={linkTitle}
                      className={`${isActive || 'disabled'}`}
                      target="blank">
                      {linkTitle}
                    </a>
                  ))}
                </p>
              </div>
              <div className="stage-logo">
                <img src={logoIcon} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyPath;
