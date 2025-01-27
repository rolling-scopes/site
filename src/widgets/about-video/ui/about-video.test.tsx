import { render, screen } from '@testing-library/react';

import { AboutVideo } from './about-video';
import { RS_INTRO_URL } from '@/shared/constants';
import { videoTitleLocalized } from 'data';

describe('AboutVideo component', () => {
  it('renders without crashing with default title', () => {
    render(<AboutVideo />);
    const aboutVideo = screen.getByTestId('about-video');
    const title = screen.getByTestId('widget-title');

    expect(aboutVideo).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(videoTitleLocalized['en'].title);
  });

  it('displays the RU title correctly', () => {
    render(<AboutVideo lang="ru" />);
    const title = screen.getByTestId('widget-title');

    expect(title).toHaveTextContent(videoTitleLocalized['ru'].title);
  });

  it('renders the placeholder in development mode', () => {
    vi.stubEnv('NODE_ENV', 'development');
    render(<AboutVideo />);
    const placeholder = screen.getByText('Video Placeholder');

    expect(placeholder).toBeVisible();
  });

  it('renders the YouTube embed in production mode', () => {
    vi.stubEnv('NODE_ENV', 'production');
    render(<AboutVideo />);
    const video = screen.getByTitle('Introduction to The Rolling Scopes School Online Courses');

    expect(video).toHaveAttribute('src', RS_INTRO_URL);
  });
});
