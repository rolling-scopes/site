import { render, screen } from '@testing-library/react';

import { OnboardLinks, OnboardLinksProps } from './onboard-links';
import { SocialMediaProps } from '@/shared/ui/social-media-item';

describe('OnboardLinks', () => {
  const mockLinks: SocialMediaProps[] = [
    {
      href: 'https://twitter.com/example',
      title: 'Twitter',
      icon: 'twitter',
    },
    {
      href: 'https://facebook.com/example',
      title: 'Facebook',
      icon: 'facebook',
    },
    {
      href: 'https://linkedin.com/example',
      title: 'LinkedIn',
      icon: 'linkedin',
    },
  ];

  const mockProps: OnboardLinksProps = {
    text: 'Connect with us on social media:',
    links: mockLinks,
  };

  it('has proper accessibility attributes', () => {
    render(<OnboardLinks {...mockProps} />);

    const nav = screen.getByRole('navigation');

    expect(nav).toHaveAttribute('aria-label', 'Social media links');
  });

  it('renders correct number of social media items', () => {
    render(<OnboardLinks {...mockProps} />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(mockLinks.length);
  });

  it('renders empty when no links provided', () => {
    const emptyProps: OnboardLinksProps = {
      text: 'No links available',
      links: [],
    };

    render(<OnboardLinks {...emptyProps} />);

    expect(screen.getByText(emptyProps.text)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
