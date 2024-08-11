import { render, screen } from '@testing-library/react';
import { List } from './list';

const data = ['listItem 1', 'listItem 2', 'listItem 3'];

describe('List Component', () => {
  it('renders list correctly', () => {
    render(<List data={data} />);

    const list = screen.getByTestId('list');

    expect(list).toBeVisible();
  });

  it('renders list correctly if list-data is empty', () => {
    render(<List data={[]} />);

    const list = screen.getByTestId('list');

    expect(list).toBeInTheDocument();
  });

  it('renders list-items correctly', () => {
    render(<List data={data} />);

    const items = screen.getAllByTestId('list-item');

    items.forEach((item) => {
      expect(item).toBeVisible();
    });
  });

  it('renders all list items', () => {
    render(<List data={data} />);

    const items = screen.getAllByTestId('list-item');

    expect(items).toHaveLength(data.length);
  });

  it('adds the marked class when marked prop is true', () => {
    render(<List data={data} type="marked" />);
    const items = screen.getAllByTestId('list-item');

    items.forEach((listItem) => {
      expect(listItem).toHaveClass('marked');
    });
  });
});
