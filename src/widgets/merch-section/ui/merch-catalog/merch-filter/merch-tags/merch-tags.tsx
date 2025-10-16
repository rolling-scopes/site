import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Checkbox } from '@/shared/ui/checkbox/index';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  allTags: string[];
};

export default function MerchTags({ allTags }: MerchTagsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTags = searchParams.getAll('type');

  const handleTagChange = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('page');

    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((tags) => tags !== tag)
      : [...selectedTags, tag];

    params.delete('type');

    newSelectedTags.forEach((type) => {
      params.append('type', type);
    });

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  return (
    <div id="merch-tags" className={cx('merch-tags')} role="region" aria-label="Merch filters">
      {allTags.map((tag) => {
        return (
          <Checkbox
            key={tag}
            id={tag}
            checked={selectedTags.includes(tag)}
            onChange={() => handleTagChange(tag)}
          >
            {tag}
          </Checkbox>
        );
      })}
    </div>
  );
}
