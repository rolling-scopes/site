import classNames from 'classnames/bind';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  allAvailableTags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
};

export default function MerchTags({ allAvailableTags, selectedTags, onTagChange }: MerchTagsProps) {
  return (
    <div id="merch-tags" className={cx('tags-wrapper')} role="region" aria-label="Merch filters">
      {allAvailableTags.map((tag) => {
        const safeId = `tag-checkbox-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        return (
          <label
            key={tag}
            htmlFor={safeId}
            className={cx('tags-label', { selected: selectedTags.includes(tag) })}
          >
            <input
              type="checkbox"
              id={safeId}
              className={cx('tags-checkbox-original')}
              checked={selectedTags.includes(tag)}
              onChange={() => onTagChange(tag)}
            />
            <span className={cx('tags-checkbox-custom')}></span>
            <span>{tag}</span>
          </label>
        );
      })}
    </div>
  );
}
