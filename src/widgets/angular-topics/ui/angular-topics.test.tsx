import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AngularTopics } from './angular-topics';
import { topicsList } from '../constants';

describe('AngularTopics component', () => {
  it('renders without crashing', () => {
    render(<AngularTopics />);
    const angularTopics = screen.getByTestId('angular-topics');

    expect(angularTopics).toBeVisible();
  });

  it('displays the title with correct text', () => {
    render(<AngularTopics />);
    const title = screen.getByTestId('widget-title');

    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Topics Covered:');
  });

  it('displays the topics list with correct text', () => {
    render(<AngularTopics />);
    const list = screen.getByTestId('list');

    expect(list).toBeVisible();
    expect(list).toHaveTextContent(topicsList.join(''));
  });
});
