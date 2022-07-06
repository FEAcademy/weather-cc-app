import { render, RenderOptions } from '@testing-library/react';
import { Paths } from 'enums/Paths';
import { ReactElement, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'theme/ThemeProvider';

const AllProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const renderWithRouter = (ui: ReactElement, { route = Paths.Home } = {}, options?: Omit<RenderOptions, 'wrapper'>) => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(ui, { wrapper: AllProvidersWrapper, ...options }),
  };
};

export * from '@testing-library/react';
export { renderWithRouter as render };
