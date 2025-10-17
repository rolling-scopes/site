import classNames from 'classnames/bind';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Checkbox } from '@/shared/ui/checkbox/index';
import { MerchTagsProps } from '@/widgets/merch-catalog/types';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

export const MerchTags = ({ tags }: MerchTagsProps) => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const selectedTypes: string[] = searchParams.getAll('type');

  const handleTypeChange = (typeValue: string) => {
    const params: URLSearchParams = new URLSearchParams(searchParams);

    params.delete('page');

    const newSelectedTypes: string[] = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((type) => type !== typeValue)
      : [...selectedTypes, typeValue];

    params.delete('type');

    newSelectedTypes.forEach((type) => {
      params.append('type', type);
    });

    const newQuery: string = params.toString();
    const newUrl: string = newQuery ? `${pathname}?${newQuery}` : pathname;

    router.replace(newUrl, { scroll: false });
  };

  return (
    <div className={cx('merch-tags')} role="region" aria-label="Merch filters">
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
};
