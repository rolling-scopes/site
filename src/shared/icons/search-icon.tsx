import Image from 'next/image';

import searchIconStaticPath from '@/shared/assets/icons/search-icon.svg';

export const SearchIcon = () => {
  return (
    <Image
      width={20}
      height={20}
      src={searchIconStaticPath}
      alt="search icon"
      data-testid="search-icon"
    />
  );
};
