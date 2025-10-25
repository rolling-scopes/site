import { useEffect, useRef, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { URL_PARAMS } from '@/shared/constants';
import { SearchInput } from '@/shared/ui/search-input/search-input';

export const MerchSearch = () => {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const urlSearchTerm: string = searchParams.get(URL_PARAMS.SEARCH) || '';
  const [searchTerm, setSearchTerm] = useState<string>(urlSearchTerm);

  const isWaitingForUrlUpdate = useRef<boolean>(false);

  useEffect(() => {
    if (isWaitingForUrlUpdate.current) {
      isWaitingForUrlUpdate.current = false;
      return;
    }

    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  useEffect(() => {
    if (searchTerm === urlSearchTerm) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      params.delete(URL_PARAMS.PAGE);
      if (searchTerm) {
        params.set(URL_PARAMS.SEARCH, searchTerm);
      } else {
        params.delete(URL_PARAMS.SEARCH);
      }
      isWaitingForUrlUpdate.current = true;
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, urlSearchTerm, pathname, router, searchParams]);

  return (
    <SearchInput
      value={searchTerm}
      onChange={setSearchTerm}
      ariaLabel="Search merch"
      name="merch-search"
    />
  );
};
