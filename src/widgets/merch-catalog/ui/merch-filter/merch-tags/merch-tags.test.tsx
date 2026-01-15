import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MerchTags } from './merch-tags';
import { MOCKED_TAGS } from '@/shared/__tests__/constants';
import { ROUTES, URL_PARAMS } from '@/shared/constants';

let mockedSearchParams: URLSearchParams = new URLSearchParams();
const mockedRouter = { replace: vi.fn() };

vi.mock('next/navigation', () => ({
  useRouter: () => mockedRouter,
  usePathname: () => `/${ROUTES.MERCH}`,
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchTags', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockedRouter.replace.mockClear();
  });

  it('should render all checkboxes unchecked if URL has no "type" params', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchTags tags={MOCKED_TAGS} />);
    MOCKED_TAGS.forEach((tag) => {
      expect(screen.getByLabelText(tag)).not.toBeChecked();
    });
  });

  it('should check the correct checkbox based on a  URL "type" param', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=t-shirts`);
    render(<MerchTags tags={MOCKED_TAGS} />);
    expect(screen.getByLabelText('t-shirts')).toBeChecked();
    expect(screen.getByLabelText('hoodie')).not.toBeChecked();
    expect(screen.getByLabelText('cups')).not.toBeChecked();
  });

  it('should add a type parameter to URL when an unchecked checkbox is clicked', async () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchTags tags={MOCKED_TAGS} />);

    await user.click(screen.getByLabelText('hoodie'));

    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `/${ROUTES.MERCH}?${URL_PARAMS.TYPE}=hoodie`,
      { scroll: false },
    );
  });

  it('should remove the type parameter from URL when a checked checkbox is clicked', async () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=hoodie`);
    render(<MerchTags tags={MOCKED_TAGS} />);

    await user.click(screen.getByLabelText('hoodie'));

    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(`/${ROUTES.MERCH}`, { scroll: false });
  });

  it('should correctly remove one of multiple type parameters from URL', async () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=t-shirts&${URL_PARAMS.TYPE}=cups`);
    render(<MerchTags tags={MOCKED_TAGS} />);

    await user.click(screen.getByLabelText('t-shirts'));

    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `/${ROUTES.MERCH}?${URL_PARAMS.TYPE}=cups`,
      { scroll: false },
    );
  });

  it('should remove the "page" parameter from URL when a filter is changed', async () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=hoodie&${URL_PARAMS.PAGE}=3`);
    render(<MerchTags tags={MOCKED_TAGS} />);

    await user.click(screen.getByLabelText('cups'));

    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `/${ROUTES.MERCH}?${URL_PARAMS.TYPE}=hoodie&${URL_PARAMS.TYPE}=cups`,
      { scroll: false },
    );
  });
});
