import classNames from 'classnames/bind';
import { Trainer } from '../../types';
import { Image } from '@/shared/ui/image';

import styles from './trainer-card.module.scss';

const cx = classNames.bind(styles);

type TrainerProps = Trainer;

export const TrainerCard = ({ name, bio, role, photo }: TrainerProps) => {
  return (
    <article className={cx('trainer-card')}>
      <div className={cx('trainer-card__picture')}>
        <Image src={photo} alt={`${name} ${role}`} />
      </div>
      <div className={cx('trainer-card__right')}>
        <header>
          <h3 className={cx('trainer-card__title')}>{name}</h3>
          <h4 className={cx('trainer-card__subtitle')}>{role}</h4>
        </header>
        <p className={cx('trainer-card__content')}>{bio}</p>
      </div>
    </article>
  );
};
