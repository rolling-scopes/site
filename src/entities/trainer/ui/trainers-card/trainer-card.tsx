import classNames from 'classnames/bind';
import { Trainer } from '../../types';
import { Image } from '@/shared/ui/image';

import styles from './trainer-card.module.scss';

const cx = classNames.bind(styles);

type TrainerProps = Trainer;

export const TrainerCard = ({ name, bio, role, photo }: TrainerProps) => {
  return (
    <article className={cx('trainer-card')}>
      <div className={cx('card-picture')}>
        <Image src={photo} alt={`${name} ${role}`} />
      </div>
      <div className={cx('card-text')}>
        <header>
          <h3 className={cx('card-title')}>{name}</h3>
          <h4 className={cx('card-subtitle')}>{role}</h4>
        </header>
        <p className={cx('card-content')}>{bio}</p>
      </div>
    </article>
  );
};
