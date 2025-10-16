import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SearchInput } from '@/shared/ui/search-input/search-input';

export default function MerchSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearchTerm = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);

  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  useEffect(() => {
    if (searchTerm === urlSearchTerm) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      params.delete('page');
      if (searchTerm) {
        params.set('search', searchTerm);
      } else {
        params.delete('search');
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, urlSearchTerm, pathname, router, searchParams]);

  return (
    <SearchInput
      value={searchTerm}
      onChange={setSearchTerm}
      ariaLabel="Search merch"
      name="search"
    />
  );
}
