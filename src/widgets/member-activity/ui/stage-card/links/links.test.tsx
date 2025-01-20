import { screen } from '@testing-library/react';

import { Links } from './links';
import { renderWithRouter } from '@/shared/__tests__/utils';

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

    renderWithRouter(<Links links={testLinks} />);

    testLinks.forEach(({ href, linkTitle }) => {
      const linkElement = screen.getByText(linkTitle);

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });
});
