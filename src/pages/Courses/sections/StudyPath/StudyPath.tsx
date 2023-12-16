import { Paragraph, Title } from '../../../../components';
import StageCard from '../../../../components/StageCard/StageCard';
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
          {pathCoursesList.map((course) => (
            <StageCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyPath;
