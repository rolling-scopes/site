import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Required } from './required';

describe('Required', () => {
  it('renders the title and subtitle correctly', () => {
    render(<Required courseName="nodejs" />);
    const titleElement = screen.getByText('What you should know before starting');
    const subtitleElement = screen.getByText('What you should know before starting');

    expect(titleElement).toBeVisible();
    expect(subtitleElement).toBeVisible();
  });

  it('renders correct requirement with "nodejs" props', () => {
    render(<Required courseName="nodejs" />);
    const requirement = screen.getByText(
      /Solid knowledge of JavaScript, including ES6, is required for this course./i,
    );

    expect(requirement).toBeVisible();
  });

  it('renders correct requirements with "angular" props', () => {
    render(<Required courseName="angular" />);
    const requirements = [
      'JavaScript',
      'Typescript',
      'Git, GitHub',
      'npm, webpackCSS3',
      'Chrome DevTools Figma',
      'REST API',
    ];

    requirements.forEach((requirement) => {
      expect(screen.getByText(new RegExp(requirement, 'i'))).toBeInTheDocument();
    });
  });

  it('renders correct requirements with "awsDev" props', () => {
    render(<Required courseName="awsDev" />);
    const requirements = [
      'You should be comfortable with at',
      'English language level: Intermediate',
      'Being able to spend at least 10 hours per week studying.',
    ];

    requirements.forEach((requirement) => {
      expect(screen.getByText(new RegExp(requirement, 'i'))).toBeInTheDocument();
    });
  });

  it('renders correct requirements with "awsFundamentals" props', () => {
    render(<Required courseName="awsFundamentals" />);
    const requirements = [
      'Beginners welcome!',
      'No AWS Cloud experience is necessary.',
      'We will use the AWS Free Tier',
      'No IT prerequisites required',
      // willLearn part
      'Networking Fundamentals',
      'Cloud Technical Fundamentals',
      'AWS Cloud Essentials',
      'Basic AWS Services',
    ];

    requirements.forEach((requirement) => {
      expect(screen.getByText(new RegExp(requirement, 'i'))).toBeInTheDocument();
    });
  });
});
