import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CourseCard } from './CourseCard';

describe('CourseCard', () => {
  it('renders the course card with the correct data', () => {
    const mockProps = {
      title: 'Introduction to Testing',
      iconSrc: 'test-icon.svg',
      startDate: '2023-01-01',
      mode: 'Online',
      language: ['en', 'ru'] as ('en' | 'ru')[],
      detailsUrl: 'http://example.com/course',
      backgroundStyle: { backgroundColor: '#ffffff', accentColor: '#ff0000' }
    };

    render(<CourseCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    expect(screen.getByText(`Start ${mockProps.startDate}`)).toBeInTheDocument();

    expect(screen.getByText(mockProps.language.join(' / '))).toBeInTheDocument();

    expect(screen.getByText(`• ${mockProps.mode}`)).toBeInTheDocument();

    expect(screen.getByText('View details')).toHaveAttribute('href', mockProps.detailsUrl);
  });
});
