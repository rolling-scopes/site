import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { DesktopMerchFilters } from './desktop-merch-filters';

vi.mock('@/shared/ui/subtitle', () => ({ Subtitle: (props: { children: React.ReactNode }) => <div>{props.children}</div> }));

describe('DesktopMerchFilters', () => {
  const user = userEvent.setup();

  const mockSearchFilters = <div data-testid="search-filters">Mock Search</div>;
  const mockTagFilters = <div data-testid="tag-filters">Mock Tags</div>;

  it('should render the title and the provided filter slots', () => {
    render(
      <DesktopMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={() => {}}
      />,
    );

    expect(screen.getByText('Filter merch')).toBeInTheDocument();
    expect(screen.getByTestId('search-filters')).toBeInTheDocument();
    expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
  });

  it('should render the "Clear" button without "active" class if filters are not active', () => {
    render(
      <DesktopMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={() => {}}
      />,
    );

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).not.toHaveClass('active');
  });

  it('should render the "Clear" button with "active" class if filters are active', () => {
    render(
      <DesktopMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={true}
        onClearFilters={() => {}}
      />,
    );

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveClass('active');
  });

  it('should call onClearFilters when the "Clear" button is clicked', async () => {
    const handleClearFiltersMock = vi.fn();

    render(
      <DesktopMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={true}
        onClearFilters={handleClearFiltersMock}
      />,
    );

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    await user.click(clearButton);

    expect(handleClearFiltersMock).toHaveBeenCalledTimes(1);
  });
});
