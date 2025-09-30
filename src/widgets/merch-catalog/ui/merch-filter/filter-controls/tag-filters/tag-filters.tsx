import classNames from 'classnames/bind';

import styles from './tag-filters.module.scss';

const cx = classNames.bind(styles);

type TagFilterProps = {
  allAvailableTags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
};

export default function TagFilters({
  allAvailableTags,
  selectedTags,
  onTagChange,
}: TagFilterProps) {
  if (!allAvailableTags || allAvailableTags.length === 0) {
    return null;
  }
  return (
    <div
      id="merch-filter-tags"
      className={cx('filter-tags-wrapper')}
      role="region"
      aria-labelledby="merch-filter-toggle"
    >
      {allAvailableTags.map((tag) => {
        const safeId = `tag-checkbox-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        return (
          <label
            key={tag}
            htmlFor={safeId}
            className={cx('filter-tag-label', { selected: selectedTags.includes(tag) })}
          >
            <input
              type="checkbox"
              id={safeId}
              className={cx('filter-checkbox-original')}
              checked={selectedTags.includes(tag)}
              onChange={() => onTagChange(tag)}
            />
            <span className={cx('filter-checkbox-custom')}></span>
            <span>{tag}</span>
          </label>
        );
      })}
    </div>
  );
}
