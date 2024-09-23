import { render, screen } from '@testing-library/react';
import { AboutVideo } from './about-video';
import { video } from 'data';

describe('AboutVideo component', () => {
  it('renders without crashing with default title', () => {
    render(<AboutVideo />);
    const aboutVideo = screen.getByTestId('about-video');
    const title = screen.getByTestId('widget-title');

    expect(aboutVideo).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(video['en'].title);
  });

  it('displays the RU title correctly', () => {
    render(<AboutVideo lang="ru" />);
    const title = screen.getByTestId('widget-title');

    expect(title).toHaveTextContent(video['ru'].title);
  });

  it('renders the placeholder in development mode', () => {
    vi.stubEnv('DEV', true);
    render(<AboutVideo />);
    const placeholder = screen.getByText('Video Placeholder');

    expect(placeholder).toBeVisible();
  });

  it('renders the YouTube embed in production mode', () => {
    vi.stubEnv('DEV', false);
    render(<AboutVideo />);
    const video = screen.getByTitle('RS School Intro');

    expect(video).toHaveAttribute('src', 'https://www.youtube.com/embed/n4unZLVpnaU');
  });
});
