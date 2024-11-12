import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { CourseCard, type CourseCardProps, cx } from './course-card';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants.ts';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { dayJS } from '@/shared/helpers/dayJS';

describe('CourseCard', () => {
  const mockProps: CourseCardProps = {
    title: 'Introduction to Testing',
    iconSrc: MOCKED_IMAGE_PATH,
    startDate: dayJS().add(1).toISOString(),
    mode: 'online',
    language: ['en'],
    detailsUrl: 'http://example.com/course',
    backgroundStyle: {
      backgroundColor: '#ffffff',
      accentColor: '#ff0000',
    },
  };

  let card: HTMLElement;

  beforeEach(() => {
    renderWithRouter(<CourseCard {...mockProps} />);
    card = screen.getByTestId('course-card');
  });

  it('renders the course card correctly', () => {
    expect(card).toBeInTheDocument();
  });

  it('renders the course card content correctly', () => {
    expect(screen.getByText(mockProps.title)).toBeVisible();
    expect(screen.getByText(`${mockProps.startDate}`)).toBeVisible();
    expect(screen.getByText(mockProps.language.join(' / '))).toBeVisible();
    expect(screen.getByText(`${mockProps.mode}`)).toBeVisible();
    expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.detailsUrl);
  });

  it('renders the course card colors correctly', () => {
    const cardHeader = card.querySelector('.card-header');

    if (cardHeader) {
      const accentBlock = getComputedStyle(cardHeader, '::after');

      expect(cardHeader).toHaveClass(cx('card-header'));
      expect(cardHeader).toHaveStyle({ backgroundColor: mockProps.backgroundStyle.backgroundColor });
      expect(accentBlock).toHaveStyle({ backgroundColor: mockProps.backgroundStyle.accentColor });
    }
  });
});
