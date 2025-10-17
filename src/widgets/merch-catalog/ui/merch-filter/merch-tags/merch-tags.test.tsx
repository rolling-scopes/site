import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MerchTags } from './merch-tags';
import { MOCKED_ROUTER, MOCKED_TAGS } from '@/shared/__tests__/constants';

let mockedSearchParams: URLSearchParams = new URLSearchParams();

vi.mock('next/navigation', () => ({
  useRouter: () => MOCKED_ROUTER,
  usePathname: () => '/merch',
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchTags', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    MOCKED_ROUTER.replace.mockClear();
  });

  it('should render all checkboxes unchecked if URL has no "type" params', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchTags tags={MOCKED_TAGS} />);
    MOCKED_TAGS.forEach((tag) => {
      expect(screen.getByLabelText(tag)).not.toBeChecked();
    });
  });

  it('should check the correct checkbox based on a  URL "type" param', () => {
    mockedSearchParams = new URLSearchParams('type=Sticker');
    render(<MerchTags tags={MOCKED_TAGS} />);
    expect(screen.getByLabelText('Sticker')).toBeChecked();
    expect(screen.getByLabelText('Hoodie')).not.toBeChecked();
    expect(screen.getByLabelText('Cup')).not.toBeChecked();
  });

  it('should add a type parameter to URL when an unchecked checkbox is clicked', async () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchTags tags={MOCKED_TAGS} />);
    await user.click(screen.getByLabelText('Hoodie'));
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?type=Hoodie', { scroll: false });
  });

  it('should remove the type parameter from URL when a checked checkbox is clicked', async () => {
    mockedSearchParams = new URLSearchParams('type=Hoodie');
    render(<MerchTags tags={MOCKED_TAGS} />);
    await user.click(screen.getByLabelText('Hoodie'));
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch', { scroll: false });
  });

  it('should correctly remove one of multiple type parameters from URL', async () => {
    mockedSearchParams = new URLSearchParams('type=Sticker&type=Cup');
    render(<MerchTags tags={MOCKED_TAGS} />);
    await user.click(screen.getByLabelText('Sticker'));
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?type=Cup', { scroll: false });
  });

  it('should remove the "page" parameter from URL when a filter is changed', async () => {
    mockedSearchParams = new URLSearchParams('type=Hoodie&page=3');
    render(<MerchTags tags={MOCKED_TAGS} />);
    await user.click(screen.getByLabelText('Cup'));
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?type=Hoodie&type=Cup', { scroll: false });
  });
});
