import SearchInput from '@/shared/ui/search-input/search-input';

type SearchInputProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function SearchFilters({ searchTerm, onSearchChange }: SearchInputProps) {
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
