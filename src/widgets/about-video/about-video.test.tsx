import { render, screen } from '@testing-library/react';
import { AboutVideo } from './ui/about-video';

describe('AboutVideo', () => {
  it('renders the title correctly', () => {
    render(<AboutVideo />);
    expect(screen.getByText('RS School video')).toBeInTheDocument();
  });

  it('renders the placeholder in development mode', () => {
    vi.stubEnv('DEV', true);
    render(<AboutVideo />);
    expect(screen.getByText('Video Placeholder')).toBeInTheDocument();
  });

  it('renders the YouTube embed in production mode', () => {
    vi.stubEnv('DEV', false);
    render(<AboutVideo />);
    expect(screen.getByTitle('RS School Intro')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/n4unZLVpnaU',
    );
  });
});
