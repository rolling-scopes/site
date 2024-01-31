import { screen } from '@testing-library/react';
import { TrainingProgram } from './training-program';
import { renderWithRouter } from '@/__tests__/utils';
import { expect, it } from 'vitest';

describe('TrainingProgram Component', () => {
  const courses: ('awsDev' | 'javascript' | 'awsFundamentals' | 'angular')[] = [
    'awsDev',
    'javascript',
    'awsFundamentals',
    'angular'
  ];

  courses.forEach((course) => {
    it(`renders correct image for ${course} course`, () => {
      renderWithRouter(<TrainingProgram course={course} />);

      const image = screen.getByRole('img', { name: course });
      expect(image).toHaveAttribute('alt', expect.stringContaining(course));
    });
  });

  it('renders correct title', () => {
    renderWithRouter(<TrainingProgram course="angular" />);
    const title = screen.getByText(/Training program/i);
    expect(title).toBeVisible();
  });

  it('renders notice BE AWARE', () => {
    renderWithRouter(<TrainingProgram course="angular" />);
    const title = screen.getByText('BE AWARE');
    expect(title).toBeVisible();
  });
});
