import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ROUTES } from '@/app/const';

interface RenderWithRouterProps {
  route?: string;
}

export const renderWithRouter = (
  ui: ReactNode,
  { route = ROUTES.HOME }: RenderWithRouterProps = {},
) => {
  window.history.pushState({}, 'Test page', route);
  const Wrapper = ({ children }: { children?: ReactNode }) => {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
  };

  return render(ui, { wrapper: Wrapper });
};
