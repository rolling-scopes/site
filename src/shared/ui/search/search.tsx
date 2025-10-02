import classNames from 'classnames/bind';

import styles from './search.module.scss';

const cx = classNames.bind(styles);

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  name?: string;
};

export default function Search({ value, onChange, placeholder, ariaLabel, name }: SearchProps) {
  return (
    <input
      className={cx('input')}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
      name={name}
    />
  );
}
