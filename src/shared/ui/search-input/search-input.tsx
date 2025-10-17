import classNames from 'classnames/bind';

import styles from './search-input.module.scss';

const cx = classNames.bind(styles);

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
  name?: string;
};

export const SearchInput = ({ value, onChange, ariaLabel, name }: SearchInputProps) => {
  return (
    <input
      className={cx('search-input')}
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={ariaLabel}
      name={name}
    />
  );
};
