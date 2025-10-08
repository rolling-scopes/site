import SearchInput from '@/shared/ui/search-input/search-input';

type SearchFiltersProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function SearchFilters({ searchTerm, onSearchChange }: SearchFiltersProps) {
  return (
    <SearchInput
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search..."
      ariaLabel="Search merch"
      name="search"
    />
  );
}
