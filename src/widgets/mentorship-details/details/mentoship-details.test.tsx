import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { MentorshipDetails } from './mentorship-details';
import { MentorshipsDetails } from 'data';

const mockDetails: MentorshipsDetails[] = [
  {
    id: 1,
    title: 'duration of mentoring',
    info: '8-19 weeks',
  },
  {
    id: 2,
    title: 'amount of students desired to mentor',
    info: '2-6 students',
  },
];

describe('DetailsMentorship component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;

  beforeEach(() => {
    render(<MentorshipDetails description={mockDetails} />);
    widget = screen.getByTestId('details-mentorship');
    title = screen.getByTestId('widget-title');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Mentorship Details');
  });

  it.each(mockDetails)('renders detail for "%s"', ({ title, info }) => {
    const [firstPart, secondPart] = info.split(' ');
    const infoElement = screen.getByText(new RegExp(`${firstPart}\\s*${secondPart}`, 'i'));
    const titleElement = screen.getByText(title);

    expect(infoElement).toBeVisible();
    expect(titleElement).toBeVisible();
  });
});
