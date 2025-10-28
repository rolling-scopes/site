import { useEffect, useRef, useState } from 'react';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

import { URL_PARAMS } from '@/shared/constants';
import { SearchInput } from '@/shared/ui/search-input/search-input';

export const MerchSearch = () => {
  const router = useRouter();
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const urlSearchTerm: string = searchParams.get(URL_PARAMS.SEARCH) || '';
  const [inputValue, setInputValue] = useState<string>(urlSearchTerm);

  const isWaitingForUrlUpdate = useRef<boolean>(false);

  useEffect(() => {
    if (isWaitingForUrlUpdate.current) {
      isWaitingForUrlUpdate.current = false;
      return;
    }

    setInputValue(urlSearchTerm);
  }, [urlSearchTerm]);

  useEffect(() => {
    const searchTerm = inputValue.trim().replace(/\s+/g, ' ');

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
  }, [inputValue, urlSearchTerm, pathname, router, searchParams]);

  return (
    <SearchInput
      value={inputValue}
      onChange={setInputValue}
      ariaLabel="Search merch"
      name="merch-search"
    />
  );
};
