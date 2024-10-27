import classNames from 'classnames/bind';

import styles from './step.module.scss';

const cx = classNames.bind(styles);

interface StepProps {
  id: string | number;
}

export const Step = ({ id }: StepProps) => {
  return (
    <div className={cx('stage-step')}>
      <span className={cx('stage-number')}>{id}</span>
      <div className={cx('stage-line')} />
    </div>
  );
};
