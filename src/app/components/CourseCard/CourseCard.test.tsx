import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CourseCard } from './CourseCard';

describe('CourseCard', () => {
  const mockProps = {
    title: 'Introduction to Testing',
    iconSrc: 'test-icon.svg',
    startDate: '2023-01-01',
    mode: 'Online',
    language: ['en', 'ru'] as ('en' | 'ru')[],
    detailsUrl: 'http://example.com/course',
    backgroundStyle: { backgroundColor: '#ffffff', accentColor: '#ff0000' }
  };

  beforeEach(() => {
    render(<CourseCard {...mockProps} />);
  });

  it('renders the course card title', () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the course start date', () => {
    expect(screen.getByText(`Start ${mockProps.startDate}`)).toBeInTheDocument();
  });

  it('renders the course language', () => {
    expect(screen.getByText(mockProps.language.join(' / '))).toBeInTheDocument();
  });

  it('renders the course mode', () => {
    expect(screen.getByText(`• ${mockProps.mode}`)).toBeInTheDocument();
  });

  it('renders the course details link', () => {
    expect(screen.getByText('View details')).toHaveAttribute('href', mockProps.detailsUrl);
  });
});
