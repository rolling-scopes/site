import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumb } from './breadcrumb';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Breadcrumb', () => {
  it('should render breadcrumb correctly', () => {
    const props = {
      linkTo: '/some-link/',
      text: 'Some text',
    };

    renderWithRouter(<Breadcrumb {...props} />);

    const link = screen.getByText(props.text);

    expect(link).toBeVisible();
    expect(link.tagName).toEqual('A');
    expect(link.getAttribute('href')).toEqual(props.linkTo);
  });

  it('should render last breadcrumb correctly', () => {
    const props = {
      linkTo: '/some-link/',
      text: 'Some text',
      isLastLink: true,
    };

    renderWithRouter(<Breadcrumb {...props} />);

    const link = screen.getByText(props.text);

    expect(link).toBeVisible();
    expect(link.tagName).not.toEqual('A');
    expect(screen.queryByText('/')).toBeNull();
  });
});
