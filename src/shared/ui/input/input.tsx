import classNames from 'classnames/bind';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
};

export default function Input({ value, onChange, placeholder, ariaLabel }: SearchInputProps) {
  return (
    <input
      className={cx('input')}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
    />
  );
}
