import { TrainerCard } from './trainer-card';
import { Title } from '@/app/components';
import './trainers.scss';
import { reactEn } from './react-en.data';
import { reactRu } from './react-ru.data';
import { awsDev } from './awsDev.data';
import { nodejs } from './nodejs.data';
import { angular } from './angular.data';

const courseDataMap = {
  reactEn,
  reactRu,
  awsDev,
  nodejs,
  angular
};

interface TrainersProps {
  courseName: keyof typeof courseDataMap;
}

export const Trainers = ({ courseName }: TrainersProps) => {
  const trainers = courseDataMap[courseName];

  let title =
    courseName === 'reactRu'
      ? 'Преподаватели курса'
      : trainers.length > 1
      ? 'Our mentors and trainers'
      : 'Our trainer';

  return (
    <section className="nodejs-trainer container">
      <div className="nodejs-trainer content gap">
        <Title text={title} hasLines />
        <div className="trainers-list">
          {trainers.map(({ name, bio, photo, role }) => (
            <TrainerCard key={name} name={name} role={role} bio={bio} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
};
