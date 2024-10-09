import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MentorsWanted } from './mentors-wanted';
import { LINKS } from '@/app/const';
import { renderWithRouter } from '@/shared/__tests__/utils';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';

const mockedData = {
  title: 'Mentors Wanted!',
  paragraph: /If you are interested in mentoring our students/i,
  link: LINKS.ANGULAR_MENTORING,
  image: mentorImg,
  alt: 'Sloth - mascot dresses as a detective',
};

describe('MentorsWanted component', () => {
  beforeEach(() => {
    renderWithRouter(<MentorsWanted />);
  });

  it('renders without crashing', () => {
    const mentorsWanted = screen.getByTestId('mentors-wanted');

    expect(mentorsWanted).toBeVisible();
  });

  it('renders the component content correctly', () => {
    const title = screen.getByTestId('widget-title');
    const paragraph = screen.getByTestId('paragraph');
    const link = screen.getByTestId('link-custom');
    const slothImage = screen.getByTestId('sloth-mascot');

    expect(title).toBeVisible();
    expect(paragraph).toBeVisible();
    expect(link).toBeVisible();
    expect(slothImage).toBeVisible();

    expect(title).toHaveTextContent(mockedData.title);
    expect(paragraph).toHaveTextContent(mockedData.paragraph);

    expect(link).toHaveAttribute('href', mockedData.link);
    expect(slothImage).toHaveAttribute('src', mockedData.image);
    expect(slothImage).toHaveAttribute('alt', mockedData.alt);
  });
});
