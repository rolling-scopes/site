import { screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';

import { SocialMediaItem } from './social-media-item';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('SocialMediaItem component', () => {
  const mockIcon: ReactNode = <div>mockIcon</div>;

  const props = {
    title: 'TestSocialMedia',
    href: 'https://test.com',
    icon: mockIcon,
  };

  let linkElement: HTMLElement;

  beforeEach(() => {
    renderWithRouter(<SocialMediaItem {...props} />);
    linkElement = screen.getByTestId('social-media');
  });

  it('renders without crashing', () => {
    expect(linkElement).toBeInTheDocument();
  });

  it('renders correct icon', () => {
    const icon = screen.getByText('mockIcon');

    expect(icon).toBeVisible();
  });

  it('displays correct title', () => {
    const title = screen.getByTestId('media-title');

    expect(title).toBeVisible();
    expect(title.innerHTML).toBe(props.title);
  });

  it('has correct link attributes', () => {
    expect(linkElement.getAttribute('href')).toBe(props.href);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
