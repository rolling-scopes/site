import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialMedia } from './social-media';
import { ReactNode } from 'react';

describe('SocialMedia component', () => {
  const mockIcon: ReactNode = <div>mockIcon</div>;

  const props = {
    title: 'TestSocialMedia',
    href: 'https://test.com',
    icon: mockIcon
  };

  it('renders without crashing', () => {
    render(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
  });

  it('renders correct icon', () => {
    render(<SocialMedia {...props} />);
    const icon = screen.getByText('mockIcon');
    expect(icon).toBeInTheDocument();
  });

  it('displays correct title', () => {
    render(<SocialMedia {...props} />);
    const title = screen.getByText('TestSocialMedia');
    expect(title).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', 'https://test.com');
  });

  it('opens link in new window', () => {
    render(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });

  it('has no referrer', () => {
    render(<SocialMedia {...props} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });
});
