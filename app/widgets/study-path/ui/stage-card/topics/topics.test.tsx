import { render, screen } from '@testing-library/react';
import { Topics } from './topics';

describe('Topics Component', () => {
  it('renders topics correctly', () => {
    const testTopics = ['Topic 1', 'Topic 2', 'Topic 3'];

    render(<Topics topics={testTopics} />);

    testTopics.forEach((topic) => {
      expect(screen.getByText(topic)).toBeInTheDocument();
    });
  });
});
