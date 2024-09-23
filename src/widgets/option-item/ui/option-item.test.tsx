import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OptionItem } from './option-item';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('OptionItem component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let description: HTMLElement;

  describe('without buttonLabel', () => {
    beforeEach(() => {
      renderWithRouter(<OptionItem title="My Title" description="My Description" />);
      widget = screen.getByTestId('option');
      title = screen.getByTestId('subtitle');
      description = screen.getByTestId('paragraph');
    });

    it('renders widget without crashing', () => {
      expect(widget).toBeVisible();
    });

    it('displays correct title', () => {
      expect(title).toBeVisible();
      expect(title).toHaveTextContent('My Title');
    });

    it('displays correct description', () => {
      expect(description).toBeVisible();
      expect(description).not.toBeEmptyDOMElement();
      expect(description.innerHTML).not.toBeNull();
      expect(description).toHaveTextContent('My Description');
    });

    it('does not render button when buttonLabel is not provided', () => {
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('with buttonLabel', () => {
    beforeEach(() => {
      renderWithRouter(
        <OptionItem
          title="My Title"
          description="My Description"
          linkLabel="My Button"
          href="http://my-link.com"
        />,
      );
    });

    it('renders button with correct label and href when buttonLabel is provided', () => {
      const button = screen.getByRole('link', { name: /My Button/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('href', 'http://my-link.com');
      expect(button).toHaveAttribute('target', '_blank');
    });
  });
});
