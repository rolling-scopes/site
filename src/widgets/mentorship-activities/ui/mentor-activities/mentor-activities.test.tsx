import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MentorActivities } from './mentor-activities';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

const mockedData = {
  activitiesTitle: 'Test Activities Title',
  activities: [
    {
      id: 1,
      title: 'Test title 1',
      description: 'Test description 1',
      icon: MOCKED_IMAGE_PATH,
      links: [
        {
          href: 'https://test.com',
          linkTitle: 'Test link',
        },
      ],
    },
    {
      id: 2,
      title: 'Test title 2',
      description: 'Test description 2',
      icon: MOCKED_IMAGE_PATH,
    },
    {
      id: 3,
      title: 'Test title 3',
      description: 'Test description 3',
      icon: MOCKED_IMAGE_PATH,
    },
  ],
};

describe('MentorActivities component', () => {
  const { activitiesTitle, activities } = mockedData;

  it('renders correct content for component', () => {
    render(<MentorActivities activitiesTitle={activitiesTitle} activities={activities} />);
    const title = screen.getByTestId('widget-title');
    const cardsContainer = screen.getByTestId('activity-cards-container');
    const itemElements = screen.getAllByTestId('activity-card');

    expect(title).toBeVisible();
    expect(title.innerHTML).toBe(activitiesTitle);

    expect(cardsContainer).toBeVisible();
    expect(itemElements).toHaveLength(activities.length);

    itemElements.forEach((item) => {
      expect(item).toBeVisible();
    });
  });
});
