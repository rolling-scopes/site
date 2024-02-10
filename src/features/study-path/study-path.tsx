import { type DataMap } from '@/app/services/data/courses-data.types';
import { Paragraph, Title } from '@/app/components';
import { Stages } from './components';
import { useDataByName } from '@/app/hooks';
import './study-path.scss';

interface StudyPathProps {
  path: keyof DataMap;
  marked?: boolean;
}

export const StudyPath = ({ path, marked }: StudyPathProps) => {
  const { data: coursesPath } = useDataByName<keyof DataMap>(path);
  const title =
    path === 'angularPath' || path === 'awsDevPath'
      ? 'Course Curriculum'
      : 'Choose what you want to learn';
  const paragraph =
    path === 'angularPath' || path === 'awsDevPath'
      ? 'This program will have theory and practice on the following topic:'
      : 'A full-stack developer is someone who has expertise in both frontend (what users see) and backend (server and database) development. This dual skill set enables them to supervise and implement projects from start to finish. Businesses today prioritize hiring full-stack developers because they can efficiently bridge various technological aspects, resulting in faster product development.';

  return (
    <section className="study-path container" id="learning-path">
      <div className="study-path content upd">
        <Title text={title} hasAsterisk />
        <Paragraph>{paragraph}</Paragraph>
        <Stages stages={coursesPath} marked={marked} />
      </div>
    </section>
  );
};
