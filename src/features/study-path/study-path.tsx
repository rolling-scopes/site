import { Stages } from './components';
import { Paragraph, Title } from '@/app/components';
import { useDataByName } from '@/app/hooks';
import { type DataMap } from '@/app/services/data/courses-data.types';

import './study-path.scss';

type PathNames = Exclude<keyof DataMap, 'courses'>;

interface StudyPathProps {
  path: PathNames;
  marked?: boolean;
}

export const StudyPath = ({ path, marked }: StudyPathProps) => {
  const { data: coursesPath } = useDataByName<PathNames>(path);

  const title =
    path === 'angular' || path === 'awsDev' ? 'Course Curriculum' : 'Choose what you want to learn';

  const paragraph =
    path === 'angular' || path === 'awsDev'
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
