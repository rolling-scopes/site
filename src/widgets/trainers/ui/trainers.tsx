import classNames from 'classnames/bind';
import { Trainer, TrainerCard } from '@/entities/trainer';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { trainersTitle } from '@/widgets/trainers/constants';

import styles from './trainers.module.scss';

const cx = classNames.bind(styles);

type TrainersProps = {
  trainers: Trainer[];
  lang?: 'en' | 'ru';
};

export const Trainers = ({ trainers, lang = 'en' }: TrainersProps) => {
  const title = trainersTitle[lang];

  return (
    <section className={cx('trainers', 'container')}>
      <div className={cx('trainers-content', 'content')}>
        <WidgetTitle mods="lines">
          {title}
        </WidgetTitle>
        <div className={cx('trainers-list')}>
          {trainers.map(({ name, bio, photo, role }, index) => (
            <TrainerCard
              key={index}
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
