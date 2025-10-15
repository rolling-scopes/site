import { type ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './checkbox.module.scss';

const cx = classNames.bind(styles);

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  className?: string;
};

export const Checkbox = ({ id, checked, onChange, children, className }: CheckboxProps) => {
  const labelClasses = cx('checkbox', { checked }, className);

  return (
    <label htmlFor={id} className={labelClasses}>
      <input
        type="checkbox"
        id={id}
        className={cx('checkbox-original')}
        checked={checked}
        onChange={onChange}
      />

      <span className={cx('checkbox-custom')}></span>
      <span>{children}</span>
    </label>
  );
};
