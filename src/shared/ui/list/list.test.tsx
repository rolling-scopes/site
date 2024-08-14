import { render, screen } from '@testing-library/react';
import { List, cx } from './list';

const data = ['listItem 1', 'listItem 2', 'listItem 3'];

describe('List Component', () => {
  it('renders list correctly', () => {
    render(<List data={data} />);

    const list = screen.getByTestId('list');

    expect(list).toBeVisible();
  });

  it('list has marked by default', () => {
    render(<List data={data} />);

    const list = screen.getByTestId('list');

    expect(list).toHaveClass(cx('marked'));
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

  it('adds the marked class when marked prop is false', () => {
    render(<List data={data} marked={false} />);
    const items = screen.getAllByTestId('list-item');

    if (items) {
      items.forEach((listItem) => {
        expect(listItem).not.toHaveClass(cx('marked'));
      });
    }
  });
});
