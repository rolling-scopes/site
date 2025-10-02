import Search from '@/shared/ui/search/search';

type SearchInputProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <Search
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search..."
      ariaLabel="Search merch"
      name="search"
    />
  );
}
