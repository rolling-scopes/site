import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { MentorsWanted } from './mentors-wanted';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

const registerLink = 'https://app.rs.school/registry/mentor';

describe('Mentors', () => {
  beforeEach(() => {
    renderWithRouter(<MentorsWanted />);
  });

  it('renders the widget', () => {
    const widget = screen.getByTestId('mentors-wanted');

    expect(widget).toBeVisible();
  });

  it('renders the title', () => {
    const title = screen.getByTestId('widget-title');

    expect(title).toBeVisible();
  });

  it('renders the paragraph', () => {
    const text =
      'The Rolling Scopes School is constantly looking for mentors from all over the world to teach everyone who wants to learn the JavaScript language and the world of Front-end. Over the past few years, over 1500+ people have successfully completed our six month training program.';
    const paragraph = screen.getByTestId('paragraph');

    expect(paragraph).toBeVisible();
    expect(paragraph).toHaveTextContent(text);
  });

  it('renders the become a mentor button', () => {
    const button = screen.getByRole('link', { name: /Become a mentor/i });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('href', registerLink);
  });

  it('renders the mentor image', () => {
    const img = screen.getByAltText('Sloth - mascot dressed as a detective');

    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
