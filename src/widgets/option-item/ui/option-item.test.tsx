import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OptionItem } from './option-item';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('OptionItem component', () => {
  const mockProps = {
    title: 'Title',
    description: 'Description',
    linkLabel: 'Test link',
    href: 'http://link.com',
  };

  let widget: HTMLElement;
  let title: HTMLElement;
  let description: HTMLElement;

  describe('without linkLabel', () => {
    beforeEach(() => {
      renderWithRouter(<OptionItem title={mockProps.title} description={mockProps.description} />);
      widget = screen.getByTestId('option-item');
      title = screen.getByTestId('subtitle');
      description = screen.getByTestId('paragraph');
    });

    it('renders widget without crashing', () => {
      expect(widget).toBeVisible();
    });

    it('displays correct content', () => {
      expect(title).toBeVisible();
      expect(title).toHaveTextContent(mockProps.title);
      expect(description).toBeVisible();
      expect(description).toHaveTextContent(mockProps.description);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('with linkLabel', () => {
    beforeEach(() => {
      renderWithRouter(<OptionItem {...mockProps} />);
    });

    it('renders link with correct label and href when linkLabel is provided', () => {
      const link = screen.getByRole('link');

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', mockProps.href);
      expect(link).toHaveTextContent(mockProps.linkLabel);
    });
  });
});
