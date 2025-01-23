import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MentorsRegister } from './mentors-register';
import mentorImg from '@/shared/assets/mentor-register.svg';

const mockParagraphs = [
  'If you still have questions about the mentoring process',
  'You need a Github account to complete registration and access the RS-App application',
];

describe('MentorsRegister Component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let image: HTMLElement;

  beforeEach(() => {
    render(<MentorsRegister />);
    widget = screen.getByTestId('mentoring-register');
    title = screen.getByTestId('widget-title');
    image = screen.getByTestId('mentoring-register-image');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('renders widget with correct content', () => {
    expect(title).toBeVisible();
    expect(title.innerHTML).toBe('Register as a Mentor');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', mentorImg.src);
    expect(image).toHaveAttribute('alt', 'Sloth mascot dressed in a red superhero cape');
  });

  it.each(mockParagraphs)('should render "%s" paragraph correctly', (p) => {
    expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
  });

  it('renders button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /Registration/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('href', `https://app.rs.school/registry/mentor`);
  });
});
