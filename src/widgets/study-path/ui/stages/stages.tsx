import classNames from 'classnames/bind';
import { StageCard } from '../stage-card/stage-card';
import { type Stage } from '../stage-card/stage-card.types';
import type { ListType } from '@/shared/types';

import styles from './stages.module.scss';

const cx = classNames.bind(styles);

export type StagesProps = {
  stages: Stage[] | null;
  type?: ListType;
};

export const Stages = ({ stages, type }: StagesProps) => {
  if (stages === null || stages.length === 0) {
    return null;
  }

  return (
    <div className={cx('stages')}>
      {stages.map(({ id, title, description, logoIcon, links, topics, imageSrc, list }) => (
        <StageCard
          key={id}
          id={id}
          title={title}
          description={description}
          logoIcon={logoIcon}
          links={links}
          topics={topics}
          imageSrc={imageSrc}
          list={list}
          type={type}
        />
      ))}
    </div>
  );
};
