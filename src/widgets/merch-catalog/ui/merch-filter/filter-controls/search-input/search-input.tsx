import classNames from 'classnames/bind';

import styles from './search-input.module.scss';

const cx = classNames.bind(styles);

type SearchInputProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <div className={cx('search')}>
      <input
        className={cx('search-input')}
        id="merch-search-input"
        type="text"
        aria-label="Search merch"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
