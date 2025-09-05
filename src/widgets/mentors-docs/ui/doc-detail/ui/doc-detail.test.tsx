import { render, screen } from '@testing-library/react';

import { DocDetail, DocDetailProps } from './doc-detail';

describe('DocDetail', () => {
  const mockProps: DocDetailProps = {
    textBeforeLink: 'Before link text',
    textLink: 'Link text',
    textAfterLink: 'After link text',
    linkDocs: 'https://example.com/docs',
    className: 'custom-class',
  };

  it('renders null when no linkDocs provided', () => {
    const propsWithoutLink = {
      ...mockProps,
      linkDocs: undefined,
    };
    const { container } = render(<DocDetail {...propsWithoutLink} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders with correct text structure', () => {
    render(<DocDetail {...mockProps} />);

    const paragraph = screen.getByTestId('paragraph');

    expect(paragraph).toHaveTextContent(
      `${mockProps.textBeforeLink} ${mockProps.textLink} ${mockProps.textAfterLink}`,
    );
  });

  it('contains a link with correct attributes', () => {
    render(<DocDetail {...mockProps} />);

    const link = screen.getByRole('link');

    expect(link).toHaveTextContent(mockProps.textLink);
    expect(link).toHaveAttribute('href', mockProps.linkDocs);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveClass(mockProps.className as string);
  });
});
