import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { CourseCard } from './course-card';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES } from '@/shared/constants';

describe('CourseCard', () => {
  describe.each(mockedCourses)('Testing course card $title', (course) => {
    let card: HTMLElement;

    beforeEach(() => {
      renderWithRouter(<CourseCard {...course} />);
      card = screen.getByTestId('course-card');
    });

    it('renders the course card correctly', () => {
      expect(card).toBeInTheDocument();
    });

    it('renders the course card content correctly', () => {
      const language = course.language.has('ru') ? 'Русский' : 'English';
      const title = `${course.title}${course.title === COURSE_TITLES.ANGULAR ? ` (${course.subTitle})` : ''}`;

      expect(screen.getByText(title)).toBeVisible();
      expect(screen.getByText(language)).toBeVisible();
      expect(screen.getByRole('link')).toHaveAttribute('href', course.detailsUrl);
    });

    it('renders the course card colors correctly', () => {
      const cardHeader = screen.getByTestId('card-header');

      expect(cardHeader).toHaveClass('card-header');
      expect(cardHeader).toHaveStyle({
        'backgroundColor': course.backgroundStyle.backgroundColor,
        '--accent-bg-color': course.backgroundStyle.accentColor,
      });
    });
  });
});
