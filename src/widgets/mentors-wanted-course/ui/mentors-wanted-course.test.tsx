import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MentorsWantedCourse } from './mentors-wanted-course';
import { LINKS } from '@/core/const';
import { renderWithRouter } from '@/shared/__tests__/utils';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';

const mockedData = {
  titleText: 'Mentors Wanted!',
  paragraphText: /If you are interested in mentoring our students/i,
  href: LINKS.ANGULAR_MENTORING,
  image: mentorImg,
  alt: 'Sloth - mascot dresses as a detective',
};

const { titleText, paragraphText, href, image, alt } = mockedData;

describe('MentorsWantedCourse component', () => {
  it('renders the component content correctly', () => {
    renderWithRouter(<MentorsWantedCourse link={href} />);
    const mentorsWantedCourse = screen.getByTestId('mentors-wanted');
    const title = screen.getByTestId('widget-title');
    const paragraph = screen.getByTestId('paragraph');
    const link = screen.getByTestId('link-custom');
    const slothImage = screen.getByTestId('sloth-mascot');

    expect(mentorsWantedCourse).toBeVisible();
    expect(title).toBeVisible();
    expect(paragraph).toBeVisible();
    expect(link).toBeVisible();
    expect(slothImage).toBeVisible();

    expect(title).toHaveTextContent(titleText);
    expect(paragraph).toHaveTextContent(paragraphText);

    expect(link).toHaveAttribute('href', href);
    expect(slothImage).toHaveAttribute('src', image.src);
    expect(slothImage).toHaveAttribute('alt', alt);
  });
});
