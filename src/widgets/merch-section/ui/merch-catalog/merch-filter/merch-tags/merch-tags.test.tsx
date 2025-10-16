import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import MerchTags from './merch-tags';

describe('MerchTags', () => {
  const user = userEvent.setup();
  const mockAllTags = ['Hoodie', 'Sticker', 'Cup'];

  it.skip('should render nothing if no tags are provided', () => {
    const { container } = render(<MerchTags allTags={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it.skip('should render a checkbox for each available tag', () => {
    render(<MerchTags allTags={mockAllTags} />);

    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes).toHaveLength(mockAllTags.length);

    expect(screen.getByLabelText('Hoodie')).toBeInTheDocument();
    expect(screen.getByLabelText('Sticker')).toBeInTheDocument();
    expect(screen.getByLabelText('Cup')).toBeInTheDocument();
  });

  it.skip('should correctly check the checkboxes based on the selectedTags prop', () => {
    render(<MerchTags allTags={mockAllTags} />);

    expect(screen.getByLabelText('Sticker')).toBeChecked();

    expect(screen.getByLabelText('Hoodie')).not.toBeChecked();
    expect(screen.getByLabelText('Cup')).not.toBeChecked();
  });

  it.skip('should call onTagChange with the correct tag when a label is clicked', async () => {
    const handleTagChangeMock = vi.fn();

    render(<MerchTags allTags={mockAllTags} />);

    const cupLabel = screen.getByText('Cup');

    await user.click(cupLabel);

    expect(handleTagChangeMock).toHaveBeenCalledTimes(1);

    expect(handleTagChangeMock).toHaveBeenCalledExactlyOnceWith('Cup');
  });
});
