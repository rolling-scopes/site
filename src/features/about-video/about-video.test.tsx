import { render, screen } from '@testing-library/react';
import { AboutVideo } from './about-video';

describe('AboutVideo', () => {
  it('renders the title correctly', () => {
    render(<AboutVideo />);
    expect(screen.getByText('RS School video')).toBeInTheDocument();
  });

  it('renders the YouTube embed', () => {
    render(<AboutVideo />);
    expect(screen.getByTitle('RS School Intro')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/n4unZLVpnaU'
    );
  });
});
