import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Checkbox } from '@/shared/ui/checkbox/index';
import { MerchTagsProps } from '@/widgets/merch-catalog/types';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

export default function MerchTags({ tags }: MerchTagsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTypes = searchParams.getAll('type');

  const handleTypeChange = (typeValue: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete('page');

    const newSelectedTypes = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((type) => type !== typeValue)
      : [...selectedTypes, typeValue];

    params.delete('type');

    newSelectedTypes.forEach((type) => {
      params.append('type', type);
    });

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  return (
    <div id="merch-tags" className={cx('merch-tags')} role="region" aria-label="Merch filters">
      {tags.map((tag) => {
        return (
          <Checkbox
            key={tag}
            id={tag}
            checked={selectedTypes.includes(tag)}
            onChange={() => handleTypeChange(tag)}
          >
            {tag}
          </Checkbox>
        );
      })}
    </div>
  );
}
