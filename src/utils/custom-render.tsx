import { render, RenderOptions } from '@testing-library/react';
import { Paths } from 'enums/Paths';
import { ProvidersCombined } from 'ProvidersCombined';
import { ReactElement, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AllProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ProvidersCombined>{children}</ProvidersCombined>
    </BrowserRouter>
  );
};

const renderWithRouter = (
  ui: ReactElement,
  { route = Paths.Home as string } = {},
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllProvidersWrapper, ...options }),
  };
};

export * from '@testing-library/react';
export { renderWithRouter as render };
