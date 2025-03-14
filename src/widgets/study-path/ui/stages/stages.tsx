import classNames from 'classnames/bind';

import type { StageCardProps } from '../stage-card/stage-card';
import { StageCard } from '../stage-card/stage-card';

import styles from './stages.module.scss';

const cx = classNames.bind(styles);

type Stages = {
  stages: StageCardProps[] | null;
};

export const Stages = ({ stages }: Stages) => {
  if (stages === null || stages.length === 0) {
    return null;
  }

  return (
    <div className={cx('stages')} data-testid="stages">
      {stages.map(({ id, title, intro, modules, image }) => (
        <StageCard
          key={id}
          id={id}
          title={title}
          intro={intro}
          modules={modules}
          image={image}
        />
      ))}
    </div>
  );
};
