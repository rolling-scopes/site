import classNames from 'classnames/bind';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { URL_PARAMS } from '@/shared/constants';
import { Checkbox } from '@/shared/ui/checkbox/index';

import styles from './merch-tags.module.scss';

const cx = classNames.bind(styles);

type MerchTagsProps = {
  tags: string[];
};

export const MerchTags = ({ tags }: MerchTagsProps) => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const selectedTypes: string[] = searchParams.getAll(URL_PARAMS.TYPE);

  const handleTypeChange = (typeValue: string) => {
    const params: URLSearchParams = new URLSearchParams(searchParams);

    params.delete(URL_PARAMS.PAGE);

    const newSelectedTypes: string[] = selectedTypes.includes(typeValue)
      ? selectedTypes.filter((type) => type !== typeValue)
      : [...selectedTypes, typeValue];

    params.delete(URL_PARAMS.TYPE);

    newSelectedTypes.forEach((type) => {
      params.append(URL_PARAMS.TYPE, type);
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
