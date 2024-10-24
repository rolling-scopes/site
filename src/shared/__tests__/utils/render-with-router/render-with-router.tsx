import { PropsWithChildren, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';
import { ROUTES } from '@/core/const';

interface RenderWithRouterProps {
  route?: string;
}

const createMockRouter = (route: string): NextRouter => ({
  basePath: '',
  pathname: route,
  route,
  query: {},
  asPath: route,
  back: vi.fn(),
  beforePopState: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn().mockResolvedValue(undefined),
  push: vi.fn().mockResolvedValue(true),
  reload: vi.fn(),
  replace: vi.fn().mockResolvedValue(true),
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: undefined,
  domainLocales: undefined,
  isPreview: false,
});

export const renderWithRouter = (
  ui: ReactNode,
  { route = ROUTES.HOME }: RenderWithRouterProps = {},
) => {
  const mockRouter = createMockRouter(route);

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>;
  };

  return render(ui, { wrapper: Wrapper });
};
