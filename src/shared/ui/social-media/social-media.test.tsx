import { ReactNode } from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SocialMedia } from './social-media';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('SocialMedia component', () => {
  const mockIcon: ReactNode = <div>mockIcon</div>;

  const props = {
    title: 'TestSocialMedia',
    href: 'https://test.com',
    icon: mockIcon,
  };

  it('renders without crashing', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toBeInTheDocument();
  });

  it('renders correct icon', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const icon = screen.getByText('mockIcon');

    expect(icon).toBeInTheDocument();
  });

  it('displays correct title', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const title = screen.getByText('TestSocialMedia');

    expect(title).toBeInTheDocument();
  });

  it('has correct href', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', 'https://test.com');
  });

  it('opens link in new window', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('has no referrer', () => {
    renderWithRouter(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
