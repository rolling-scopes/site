import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SocialMediaLink } from './social-media-link';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('SocialMediaLink component', () => {
  const props = {
    title: 'TestSocialMedia',
    href: 'https://test.com',
    icon: MOCKED_IMAGE_PATH,
  };

  let linkElement: HTMLElement;

  beforeEach(() => {
    renderWithRouter(<SocialMediaLink {...props} />);
    linkElement = screen.getByTestId('social-media');
  });

  it('renders without crashing', () => {
    expect(linkElement).toBeInTheDocument();
  });

  it('renders correct icon', () => {
    const icon = screen.getByTestId('icon');

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
