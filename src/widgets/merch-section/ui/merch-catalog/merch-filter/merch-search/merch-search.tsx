import { SearchInput } from '@/shared/ui/search-input/search-input';

type MerchSearchProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function MerchSearch({ searchTerm, onSearchChange }: MerchSearchProps) {
  return (
    <SearchInput
      value={searchTerm}
      onChange={onSearchChange}
      ariaLabel="Search merch"
      name="search"
    />
  );
}
