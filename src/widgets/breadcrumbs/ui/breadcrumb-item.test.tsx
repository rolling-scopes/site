import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BreadcrumbItem } from './breadcrumb-item';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('BreadcrumbItem', () => {
  it('should render breadcrumb correctly', () => {
    const props = {
      linkTo: '/some-link',
      text: 'Some text',
    };

    renderWithRouter(<BreadcrumbItem {...props} />);

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

    renderWithRouter(<BreadcrumbItem {...props} />);

    const link = screen.getByText(props.text);

    expect(link).toBeVisible();
    expect(link.tagName).not.toEqual('A');
    expect(screen.queryByText('/')).toBeNull();
  });
});
