import classNames from 'classnames/bind';

import { Checkbox } from '@/shared/ui/checkbox/index';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  allAvailableTags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
};

export default function MerchTags({ allAvailableTags, selectedTags, onTagChange }: MerchTagsProps) {
  return (
    <div id="merch-tags" className={cx('merch-tags')} role="region" aria-label="Merch filters">
      {allAvailableTags.map((tag) => {
        const safeId = `tag-checkbox-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

        return (
          <Checkbox
            key={tag}
            id={safeId}
            checked={selectedTags.includes(tag)}
            onChange={() => onTagChange(tag)}
          >
            {tag}
          </Checkbox>
        );
      })}
    </div>
  );
}
