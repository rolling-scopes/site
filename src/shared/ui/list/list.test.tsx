import { render, screen } from '@testing-library/react';
import { List, cx } from './list';

const data = ['listItem 1', 'listItem 2', 'listItem 3'];

describe('List Component', () => {
  let list: HTMLElement;
  let items: HTMLElement[];

  beforeEach(() => {
    render(<List data={data} />);
    list = screen.getByTestId('list');
    items = screen.getAllByTestId('list-item');
  });

  it('renders list and all list-items correctly', () => {
    expect(list).toBeVisible();
    expect(items).toHaveLength(data.length);

    items?.forEach((item, i) => {
      expect(item).toBeVisible();
      expect(item.innerHTML).toBe(data[i]);
    });
  });

  it('list has marked class by default', () => {
    expect(list).toHaveClass(cx('marked'));
  });

  it("doesn't have the 'marked' class when 'type' prop is 'unmarked", () => {
    render(<List data={data} type="unmarked" />);

    items?.forEach((listItem) => {
      expect(listItem).not.toHaveClass(cx('marked'));
    });
  });
});
