import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MerchTags from './merch-tags';

describe('MerchTags', () => {
  const user = userEvent.setup();
  const mockAllTags = ['Hoodie', 'Sticker', 'Cup'];

  it.skip('should render nothing if no tags are provided', () => {
    const { container } = render(
      <MerchTags allAvailableTags={[]} selectedTags={[]} onTagChange={() => {}} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render a checkbox for each available tag', () => {
    render(<MerchTags allAvailableTags={mockAllTags} selectedTags={[]} onTagChange={() => {}} />);

    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes).toHaveLength(mockAllTags.length);

    expect(screen.getByLabelText('Hoodie')).toBeInTheDocument();
    expect(screen.getByLabelText('Sticker')).toBeInTheDocument();
    expect(screen.getByLabelText('Cup')).toBeInTheDocument();
  });

  it('should correctly check the checkboxes based on the selectedTags prop', () => {
    const mockSelectedTags = ['Sticker'];

    render(
      <MerchTags
        allAvailableTags={mockAllTags}
        selectedTags={mockSelectedTags}
        onTagChange={() => {}}
      />,
    );

    expect(screen.getByLabelText('Sticker')).toBeChecked();

    expect(screen.getByLabelText('Hoodie')).not.toBeChecked();
    expect(screen.getByLabelText('Cup')).not.toBeChecked();
  });

  it('should call onTagChange with the correct tag when a label is clicked', async () => {
    const handleTagChangeMock = vi.fn();

    render(
      <MerchTags
        allAvailableTags={mockAllTags}
        selectedTags={[]}
        onTagChange={handleTagChangeMock}
      />,
    );

    const cupLabel = screen.getByText('Cup');

    await user.click(cupLabel);

    expect(handleTagChangeMock).toHaveBeenCalledTimes(1);

    expect(handleTagChangeMock).toHaveBeenCalledExactlyOnceWith('Cup');
  });
});
