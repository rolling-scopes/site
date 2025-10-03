import classNames from 'classnames/bind';

import styles from './search-input.module.scss';

const cx = classNames.bind(styles);

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  name?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
  name,
}: SearchInputProps) {
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
