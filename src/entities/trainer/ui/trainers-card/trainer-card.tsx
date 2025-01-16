import classNames from 'classnames/bind';
import Image from 'next/image';

import { Trainer } from '../../types';

import styles from './trainer-card.module.scss';

const cx = classNames.bind(styles);

export const TrainerCard = ({ name, bio, role, photo }: Trainer) => {
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
