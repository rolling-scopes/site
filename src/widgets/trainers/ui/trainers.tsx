import { TrainerCard } from './trainers-card/trainer-card';
import { Title } from '@/shared/ui/title';
import { Trainer } from '@/widgets/trainers/trainers.types';

import './trainers.scss';

interface TrainersProps {
  trainers: Trainer[];
  lang?: 'en' | 'ru';
}

const ONE_TRAINER = 'oneTrainer';
const MULTIPLE_TRAINERS = 'multipleTrainers';

const trainersTitle = {
  ru: {
    [ONE_TRAINER]: 'Преподаватель курса',
    [MULTIPLE_TRAINERS]: 'Преподаватели курса',
  },
  en: {
    [ONE_TRAINER]: 'Our trainer',
    [MULTIPLE_TRAINERS]: 'Our mentors and trainers',
  },
} as const;

export const Trainers = ({ trainers, lang = 'en' }: TrainersProps) => {
  const isMultipleTrainers = trainers.length > 1 ? MULTIPLE_TRAINERS : ONE_TRAINER;
  const title = trainersTitle[lang][isMultipleTrainers];

  return (
    <section className="nodejs-trainer container">
      <div className="nodejs-trainer content gap">
        <Title text={title} hasLines />
        <div className="trainers-list">
          {trainers.map(({ name, bio, photo, role }) => (
            <TrainerCard
              key={name}
              name={name}
              role={role}
              bio={bio}
              photo={photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
