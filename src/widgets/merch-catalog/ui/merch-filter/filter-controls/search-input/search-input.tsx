import Input from '@/shared/ui/input/input';

type SearchInputProps = {
  searchTerm: string;
  onSearchChange: (newSearchTerm: string) => void;
};

export default function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <Input
      value={searchTerm}
      onChange={onSearchChange}
      placeholder="Search..."
      ariaLabel="Search merch"
    />
  );
}
