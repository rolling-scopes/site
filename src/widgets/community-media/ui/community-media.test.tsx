import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { CommunityMedia } from './community-media';
import { renderWithRouter } from '@/shared/__tests__/utils';
import image from '@/shared/assets/welcome.webp';
import { communityGroups } from 'data';

let communityMedia: HTMLElement;
let title: HTMLElement;
let paragraph: HTMLElement;
let socialMediaItems: HTMLElement[];
let slothImage: HTMLElement;

describe('CommunityMedia component', () => {
  beforeEach(() => {
    renderWithRouter(<CommunityMedia />);
    communityMedia = screen.getByTestId('community-media');
    title = screen.getByTestId('widget-title');
    paragraph = screen.getByTestId('paragraph');
    socialMediaItems = screen.getAllByTestId('social-media');
    slothImage = screen.getByTestId('welcome-sloth');
  });

  it('renders the component without crashing', () => {
    expect(communityMedia).toBeVisible();
  });

  it('renders the component content correctly', () => {
    expect(title).toBeVisible();
    expect(paragraph).toBeVisible();
    expect(slothImage).toBeVisible();

    expect(socialMediaItems.length).toBe(communityGroups.length);

    expect(title).toHaveTextContent('Join RS Community');
    expect(paragraph).toHaveTextContent(/If you want to learn coding or be a RS School mentor/i);

    expect(slothImage).toHaveAttribute('src', image);
    expect(slothImage).toHaveAttribute('alt', 'A sloth mascot with a welcome');
  });
});
