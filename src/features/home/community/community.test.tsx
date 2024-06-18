import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Community } from './community';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Community', () => {
  beforeEach(() => {
    renderWithRouter(<Community />);
  });

  it('Displays Heading Correctly', () => {
    const headingElement = screen.getByText('Join RS Community');

    expect(headingElement).toBeVisible();
  });

  it('Displays Subtitle Correctly', () => {
    const subtitleElement = screen.getByText(
      /If you want to learn coding or be a RS School mentor/i,
    );

    expect(subtitleElement).toBeVisible();
  });

  it('Renders all social media links', () => {
    const socialMediaLinks = screen.getAllByRole('link');

    expect(socialMediaLinks.length).toBe(9);
  });

  it('Displays community image correctly', () => {
    const imgElement = screen.getByAltText('community-welcome');

    expect(imgElement).toBeVisible();
  });
});
