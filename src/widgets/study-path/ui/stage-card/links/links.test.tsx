import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Links } from './links';

describe('Links Component', () => {
  it('renders links correctly', () => {
    const testLinks = [
      {
        href: 'https://example.com',
        linkTitle: 'Example',
      },
      {
        href: 'https://dummy.com',
        linkTitle: 'Dummy',
      },
    ];

    render(<MemoryRouter><Links links={testLinks} /></MemoryRouter>);

    testLinks.forEach(({ href, linkTitle }) => {
      const linkElement = screen.getByText(linkTitle);

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });
});
