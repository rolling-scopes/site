import { render, screen } from '@testing-library/react';
import { Links } from './links';

describe('Links Component', () => {
  it('renders links correctly', () => {
    const testLinks = [
      {
        href: 'https://example.com',
        linkTitle: 'Example',
        isActive: true,
      },
      {
        href: 'https://dummy.com',
        linkTitle: 'Dummy',
        isActive: false,
      },
    ];

    render(<Links links={testLinks} />);

    testLinks.forEach(({ href, linkTitle }) => {
      const linkElement = screen.getByText(linkTitle);

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });

  it('applies "disabled" class correctly', () => {
    const testLink = {
      href: 'https://dummy.com',
      linkTitle: 'Dummy',
      isActive: false,
    };

    render(<Links links={[testLink]} />);

    const linkElement = screen.getByText(testLink.linkTitle);

    expect(linkElement).toHaveClass('disabled');
  });
});
