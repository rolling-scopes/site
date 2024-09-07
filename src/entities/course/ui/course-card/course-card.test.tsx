import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { CourseCard } from './course-card';
import type { CourseCardProps } from '../../types';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('CourseCard', () => {
  const mockProps: CourseCardProps = {
    title: 'Introduction to Testing',
    iconSrc: 'test-icon.svg',
    startDate: '2023-01-01',
    mode: 'online',
    language: ['en'],
    detailsUrl: 'http://example.com/course',
    backgroundStyle: {
      backgroundColor: '#ffffff',
      accentColor: '#ff0000',
    },
  };

  beforeEach(() => {
    renderWithRouter(<CourseCard {...mockProps} />);
  });

  it('renders the course card title', () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the course start date', () => {
    expect(screen.getByText(`${mockProps.startDate}`)).toBeInTheDocument();
  });

  it('renders the course language', () => {
    expect(screen.getByText(mockProps.language.join(' / '))).toBeInTheDocument();
  });

  it('renders the course mode', () => {
    expect(screen.getByText(`${mockProps.mode}`)).toBeInTheDocument();
  });

  it('renders the course details link', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.detailsUrl);
  });
});
