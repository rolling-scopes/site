import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { Audience, topics } from './audience';
import { renderWithRouter } from '@/__tests__/utils';

describe('Audience', () => {
  beforeEach(() => {
    renderWithRouter(<Audience />);
  });

  it('renders the breadcrumbs correctly', () => {
    const homeCrumb = screen.getByRole('link', { name: /home/i });
    const rsCrumb = screen.getByRole('link', { name: /rs school/i });
    const nodejsCrumb = screen.getByText(/node.js course/i);

    expect(homeCrumb).toHaveAttribute('href', '/');
    expect(rsCrumb).toHaveAttribute('href', '/rs-courses');
    expect(nodejsCrumb).toBeVisible();
  });

  it('renders the title of the course correctly', () => {
    const titleElement = screen.getByText('Course Topics');
    expect(titleElement).toBeVisible();
  });

  it('renders the course topics correctly', () => {
    topics.forEach((topic) => {
      const topicElement = screen.getByText(topic);
      expect(topicElement).toBeVisible();
    });
  });

  it('renders button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /register/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute(
      'href',
      'https://wearecommunity.io/events/nodejs-rs-2024q1'
    );
  });

  it('renders the image with correct alt text', () => {
    const imageElement = screen.getByAltText('nodejs-audience');
    expect(imageElement).toBeInTheDocument();
  });
});
